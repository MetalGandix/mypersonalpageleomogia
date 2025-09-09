import React, { useState } from 'react';

const passioni = [
  {
    nome: 'Videogiochi',
    nomeEn: 'Videogames',
    info: (
      <div style={{marginTop: '2rem'}}>
        Sono un giocatore competitivo di Super Smash Bros Ultimate, costantemente nella top 5 italiana dall’inizio del gioco fino ad oggi. Ho viaggiato in varie parti del mondo per competere in diversi tornei internazionali.
      </div>
    ),
    infoEn: (
      <div style={{marginTop: '2rem'}}>
        I am a competitive Super Smash Bros Ultimate player, consistently in the Italian top 5 since the beginning of the game. I have traveled to various parts of the world to compete in international tournaments.
      </div>
    ),
    immagini: [
      '/immagini/leo_g_2.jpeg',
      '/immagini/leo_g_1.jpg'
    ]
  },
  {
    nome: 'Viaggi',
    nomeEn: 'Travels',
    info: (
      <div style={{marginTop: '2rem'}}>
        Amo viaggiare per il piacere di scoprire nuove culture e conoscere nuove persone. Il mio viaggio preferito è stato in Giappone.
      </div>
    ),
    infoEn: (
      <div style={{marginTop: '2rem'}}>
        I love traveling to discover new cultures and meet new people. My favorite trip was to Japan.
      </div>
    ),
    immagini: [
      '/immagini/leo_j_1.jpg',
      '/immagini/leo_j_2.jpg'
    ]
  },
  {
    nome: 'Fotografia',
    nomeEn: 'Photography',
    info: (
      <div style={{marginTop: '2rem'}}>
        Mio papà mi ha trasmesso la passione per la fotografia, con cui ho iniziato a dilettarmi fin da piccolo. Tuttavia la parte che preferisco è la post produzione: grazie a questa passione ho sviluppato skill importanti su Photoshop.
      </div>
    ),
    infoEn: (
      <div style={{marginTop: '2rem'}}>
        My father passed on his passion for photography to me, and I started experimenting from a young age. However, my favorite part is post-production: thanks to this passion, I developed important skills in Photoshop.
      </div>    
    ),
    immagini: [
      '/immagini/leo_f_1.jpg',
    ]
  }
];

export default function Passioni({ lang }) {
  const [selected, setSelected] = useState(0);
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
      <h2>{lang === 'it' ? 'Passioni' : 'Passions'}</h2>
      <ul className="passioni-list">
        {passioni.map((p, idx) => (
          <li key={p.nome} onClick={() => handleSelect(idx)} className={selected === idx ? 'selected' : ''}>
            {lang === 'it' ? p.nome : p.nomeEn}
          </li>
        ))}
      </ul>
      {selected !== null && (
        <div className="passione-info-flex">
          <div className="passione-info-card passione-info-bio">
            <h3>{lang === 'it' ? passioni[selected].nome : passioni[selected].nomeEn}</h3>
            <div style={{marginBottom: '1.2rem'}}>{lang === 'it' ? passioni[selected].info : passioni[selected].infoEn}</div>
            <button className="close-info" onClick={() => setSelected(null)}>{lang === 'it' ? 'Chiudi' : 'Close'}</button>
          </div>
          <div className="passione-info-slider">
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
                  <ul className="slider-list" style={{width: '400px', height: '400px', margin: '0 auto', display: 'block', maxWidth: '98vw'}}>
                    {passioni[selected].immagini.map((img, idx) => (
                      <li
                        key={img}
                        className={carouselIdx === idx ? 'active' : ''}
                        style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '32px', boxShadow: '0 8px 25px 0 rgba(16,39,112,.1)', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}
                      >
                        <span className="passion-label">{lang === 'it' ? passioni[selected].nome : passioni[selected].nomeEn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
