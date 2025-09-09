import React from 'react';

export default function Lauree({ lang }) {
  const degrees = lang === 'it'
    ? [
        {
          title: 'Ph.D. in LESDIT',
          content: <>Learning Sciences and Digital Technologies<br />Università di Modena e Reggio Emilia (dal 2023)</>
        },
        {
          title: 'Laurea Magistrale in Computer Science',
          content: <>Università di Camerino (UNICAM), 2023<br /><span style={{color:'#000000ff'}}>Voto: 106/110</span></>
        },
        {
          title: 'Laurea Triennale in Informatica',
          content: <>Università di Camerino (UNICAM)</>
        }
      ]
    : [
        {
          title: 'Ph.D. in LESDIT',
          content: <>Learning Sciences and Digital Technologies<br />University of Modena and Reggio Emilia (since 2023)</>
        },
        {
          title: 'MSc in Computer Science',
          content: <>University of Camerino (UNICAM), 2023<br /><span style={{color:'#4f8cff'}}>Grade: 106/110</span></>
        },
        {
          title: 'BSc in Computer Science',
          content: <>University of Camerino (UNICAM)</>
        }
      ];
  return (
    <>
      <h2 style={{textAlign:'center'}}>{lang === 'it' ? 'Lauree' : 'Degrees'}</h2>
      <div className="card-container">
        {degrees.map((deg, idx) => (
          <div className="card" key={idx}>
            <div className="card__title">{deg.title}</div>
            <div className="card__content">{deg.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
