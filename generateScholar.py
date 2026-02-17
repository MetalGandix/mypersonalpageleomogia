import requests
import json
import os

API_KEY = "801f7c64a27443cc5bc4adc2c55e8b6812347f404d1dd4b1ccf7ddd3b5c487ec"
AUTHOR_ID = "lzU_hFYAAAAJ"

URL = "https://serpapi.com/search"

params = {
    "engine": "google_scholar_author",
    "author_id": AUTHOR_ID,
    "hl": "it",
    "num": 100,
    "api_key": API_KEY
}

response = requests.get(URL, params=params)
data = response.json()

if data.get("search_metadata", {}).get("status") != "Success":
    print("Errore API:", data.get("search_metadata"))
    exit()

articles = data.get("articles", [])

publications = []

for a in articles:
    publications.append({
        "title": a.get("title"),
        "authors": a.get("authors"),
        "year": a.get("year"),
        "citations": a.get("cited_by", {}).get("value", 0),
        "link": a.get("link")
    })

os.makedirs("public", exist_ok=True)

with open("public/publications.json", "w", encoding="utf-8") as f:
    json.dump(publications, f, indent=2, ensure_ascii=False)

print("publications.json aggiornato con successo.")
