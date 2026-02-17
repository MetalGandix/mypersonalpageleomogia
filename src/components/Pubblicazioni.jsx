import React, { useEffect, useState } from "react";

export default function Pubblicazioni({ lang }) {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/publications.json")
      .then((res) => res.json())
      .then((data) => {
        setPublications(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore caricamento pubblicazioni:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {lang === "it" ? "Pubblicazioni" : "Publications"}
      </h2>

      {loading ? (
        <p style={{ textAlign: "center" }}>
          {lang === "it" ? "Caricamento..." : "Loading..."}
        </p>
      ) : (
        <div className="card-container">
          {publications.map((pub, idx) => (
            <div className="card" key={idx}>
              <div className="card__title">{pub.title}</div>

              <div className="card__content">
                <div>{pub.authors}</div>

                <div>
                  {pub.year}
                </div>

                <div>
                  {lang === "it" ? "Citazioni" : "Citations"}:{" "}
                  {pub.citations ?? 0}
                </div>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4f8cff", fontWeight: "500" }}
                >
                  {lang === "it"
                    ? "Vai alla pubblicazione"
                    : "View publication"}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
