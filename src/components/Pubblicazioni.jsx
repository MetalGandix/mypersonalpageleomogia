import React from 'react';

export default function Pubblicazioni({ lang }) {
  const pubs = lang === 'it'
    ? [
        {
          title: 'Isyde 2024',
          content: <>
            Abstract pubblicati: (ID: 111, pag 27), (ID: 125, pag 65)<br />
            <a href="https://www.isyde.org/wp-content/uploads/2024/07/Book_OF_Abstracts_Isyde_2024.pdf" target="_blank" rel="noopener noreferrer" style={{color:'#4f8cff', fontWeight:'500'}}>Book of Abstract Link</a>
          </>
        },
        {
          title: 'Poster ML2025',
          content: <>
            Machine Learning Methods for Complex and Quantum Systems - ML2025<br />
            4-6 giugno, Università di Camerino, Italia<br />
            <a href="https://files.spazioweb.it/ca/e2/cae2d341-22f1-4545-8c56-74fe28e72bad.pdf" target="_blank" rel="noopener noreferrer" style={{color:'#4f8cff', fontWeight:'500'}}>Book of Abstract Link</a>
          </>
        }
      ]
    : [
        {
          title: 'Isyde',
          content: <>
            (ID: 111, p. 27), (ID: 125, p. 65)<br />
            <a href="https://www.isyde.org/wp-content/uploads/2024/07/Book_OF_Abstracts_Isyde_2024.pdf" target="_blank" rel="noopener noreferrer" style={{color:'#4f8cff', fontWeight:'500'}}>Book of Abstract Link</a>
          </>
        },
        {
          title: 'Poster ML2025',
          content: <>
            Machine Learning Methods for Complex and Quantum Systems - ML2025<br />
            June 4-6, University of Camerino, Italy<br />
            <a href="https://files.spazioweb.it/ca/e2/cae2d341-22f1-4545-8c56-74fe28e72bad.pdf" target="_blank" rel="noopener noreferrer" style={{color:'#4f8cff', fontWeight:'500'}}>Book of Abstract Link</a>
          </>
        }
      ];
  return (
    <>
      <h2 style={{textAlign:'center'}}>{lang === 'it' ? 'Pubblicazioni' : 'Publications'}</h2>
      <div className="card-container">
        {pubs.map((pub, idx) => (
          <div className="card" key={idx}>
            <div className="card__title">{pub.title}</div>
            <div className="card__content">{pub.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
