import React, { useState } from 'react';

const passioni = [
  {
    nome: 'Videogiochi',
    info: (
      <>
        Sono un giocatore competitivo di Super Smash Bros Ultimate, costantemente nella top 5 italiana dall’inizio del gioco fino ad oggi. Ho viaggiato in varie parti del mondo per competere in diversi tornei internazionali.
      </>
    ),
    immagini: [
      '/immagini/leo_g_2.jpeg',
      '/immagini/leo_g_1.jpg'
    ]
  },
  {
    nome: 'Viaggi',
    info: (
      <>
        Amo viaggiare per il piacere di scoprire nuove culture e conoscere nuove persone. Il mio viaggio preferito è stato in Giappone.
      </>
    ),
    immagini: [
      '/immagini/leo_j_1.jpg',
      '/immagini/leo_j_2.jpg'
    ]
  },
  {
    nome: 'Fotografia',
    info: (
      <>
        Mio papà mi ha trasmesso la passione per la fotografia, con cui ho iniziato a dilettarmi fin da piccolo. Tuttavia la parte che preferisco è la post produzione: grazie a questa passione ho sviluppato skill importanti su Photoshop.
      </>
    ),
    immagini: [
      '/immagini/leo_f_1.jpg'
    ]
  }
];

export default function Passioni() {
  const [selected, setSelected] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const handleSelect = idx => {
    setSelected(idx === selected ? null : idx);
    setCarouselIdx(0);
  };

  const nextImg = () => {
    if (selected !== null && passioni[selected].immagini) {
      setCarouselIdx((carouselIdx + 1) % passioni[selected].immagini.length);
    }
  };
  const prevImg = () => {
    if (selected !== null && passioni[selected].immagini) {
      setCarouselIdx((carouselIdx - 1 + passioni[selected].immagini.length) % passioni[selected].immagini.length);
    }
  };

  return (
    <>
      <h2>Passioni</h2>
      <ul className="passioni-list">
        {passioni.map((p, idx) => (
          <li key={p.nome} onClick={() => handleSelect(idx)} className={selected === idx ? 'selected' : ''}>
            {p.nome}
          </li>
        ))}
      </ul>
      {selected !== null && (
        <div className="passione-info-card">
          <h3>{passioni[selected].nome}</h3>
          <div style={{marginBottom: '1.2rem'}}>{passioni[selected].info}</div>
          {passioni[selected].immagini && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginBottom: '1.2rem'
              }}
            >
              <div
                className="chi-slider-section"
                style={{
                  width: passioni[selected].nome === 'Fotografia' ? '100%' : undefined,
                  maxWidth: passioni[selected].nome === 'Fotografia' ? '700px' : '98vw',
                  margin: '0 auto'
                }}
              >
                <div className="slider-radio-group">
                  {passioni[selected].immagini.map((img, idx) => (
                    <React.Fragment key={img}>
                      <input
                        className={`slider-radio radio${idx}`}
                        type="radio"
                        id={`passion-slide-${idx}`}
                        name="passion-slider"
                        checked={carouselIdx === idx}
                        onChange={() => setCarouselIdx(idx)}
                      />
                      <label htmlFor={`passion-slide-${idx}`} style={{backgroundImage: `url(${img})`}}></label>
                    </React.Fragment>
                  ))}
                </div>
                <ul className="slider-list" style={passioni[selected].nome === 'Fotografia' ? {width: '100%', height: '420px', margin: '0 auto', display: 'block', maxWidth: '680px'} : {}}>
                  {passioni[selected].immagini.map((img, idx) => (
                    <li
                      key={img}
                      className={carouselIdx === idx ? 'active' : ''}
                      style={passioni[selected].nome === 'Fotografia'
                        ? {backgroundImage: `url(${img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}
                        : {backgroundImage: `url(${img})`} }
                    >
                      <span>{passioni[selected].nome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <button className="close-info" onClick={() => setSelected(null)}>Chiudi</button>
        </div>
      )}
    </>
  );
}
