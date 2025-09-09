import React from 'react';

const immagini = [
  {
    src: '/immagini/leo.jpg',
    label: 'Leonardo Mogianesi'
  },
  {
    src: '/immagini/leo2.jpg',
    label: 'Leonardo Mogianesi'
  },
  {
    src: '/immagini/leo3.jpg',
    label: 'Leonardo Mogianesi'
  }
];

export default function ChiSono() {
  const [selected, setSelected] = React.useState(0);

  return (
    <div className="chi-slider-section">
      <div className="slider-radio-group">
        {immagini.map((img, idx) => (
          <React.Fragment key={img.src}>
            <input
              className={`slider-radio radio${idx}`}
              type="radio"
              id={`slide-${idx}`}
              name="slider"
              checked={selected === idx}
              onChange={() => setSelected(idx)}
            />
            <label htmlFor={`slide-${idx}`}></label>
          </React.Fragment>
        ))}
      </div>
      <ul className="slider-list">
        {immagini.map((img, idx) => (
          <li
            key={img.src}
            className={selected === idx ? 'active' : ''}
            style={{backgroundImage: `url(${img.src})`}}
          >
            <span>{img.label}</span>
          </li>
        ))}
      </ul>
      <div className="bio-card">
        <h2>Chi sono</h2>
        <p>
          Sono Leonardo Mogianesi, Ph.D. student in Learning Sciences and Digital Technologies presso l’Università di Modena e Reggio Emilia, con laurea in Informatica all’Università di Camerino (UNICAM).
          <br /><br />
          Appassionato di innovazione, didattica digitale, ricerca e sviluppo software, mi dedico alla creazione di ambienti di apprendimento inclusivi ed efficaci, con particolare attenzione al pensiero computazionale e alle nuove tecnologie.
          <br /><br />
          Il mio percorso unisce la curiosità per l’informatica, la voglia di migliorare la didattica e l’interesse per il mondo dei videogiochi e della divulgazione scientifica.
        </p>
        <a
          href="/cv_Leonardo_Mogianesi_2025.pdf"
          className="cv-btn"
          download
        >
          Scarica CV
        </a>
      </div>
    </div>
  );
}
