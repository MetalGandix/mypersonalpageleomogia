"""Aggiorna public/publications.json dal profilo pubblico Google Scholar."""

import html
import json
import re
from pathlib import Path

import requests


SCHOLAR_URL = "https://scholar.google.com/citations?user=lzU_hFYAAAAJ&hl=it&pagesize=100"
OUTPUT = Path(__file__).parent / "public" / "publications.json"
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
    )
}


def text_content(fragment):
    """Converte un piccolo frammento HTML Scholar in testo leggibile."""
    return html.unescape(re.sub(r"<[^>]+>", "", fragment)).strip()


def extract_publications(page):
    rows = re.findall(
        r'<tr[^>]*class=["\'][^"\']*\bgsc_a_tr\b[^"\']*["\'][^>]*>(.*?)</tr>',
        page,
        flags=re.DOTALL,
    )
    publications = []

    for row in rows:
        title_match = re.search(
            r'<a[^>]*class=["\']gsc_a_at["\'][^>]*>(.*?)</a>', row, flags=re.DOTALL
        )
        details = re.findall(r'<div[^>]*class=["\']gs_gray["\'][^>]*>(.*?)</div>', row, flags=re.DOTALL)
        year_match = re.search(r'<span[^>]*class=["\'][^"\']*gsc_a_hc[^"\']*["\'][^>]*>(.*?)</span>', row)
        citations_match = re.search(r'class=["\'][^"\']*gsc_a_ac[^"\']*["\'][^>]*>(\d*)</a>', row)

        if not title_match:
            continue

        publications.append(
            {
                "title": text_content(title_match.group(1)),
                "authors": text_content(details[0]) if details else "",
                "year": text_content(year_match.group(1)) if year_match else "",
                "citations": int(citations_match.group(1)) if citations_match and citations_match.group(1) else 0,
                "link": "https://scholar.google.com" + html.unescape(
                    re.search(r'href=["\']([^"\']+)', title_match.group(0)).group(1)
                ),
            }
        )

    return publications


def main():
    response = requests.get(SCHOLAR_URL, headers=HEADERS, timeout=20)
    response.raise_for_status()
    publications = extract_publications(response.text)

    if not publications:
        raise RuntimeError("Google Scholar non ha restituito pubblicazioni leggibili.")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(
        json.dumps(publications, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Aggiornate {len(publications)} pubblicazioni da {SCHOLAR_URL}")


if __name__ == "__main__":
    main()
