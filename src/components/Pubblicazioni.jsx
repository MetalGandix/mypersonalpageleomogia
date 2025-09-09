import React from 'react';

export default function Pubblicazioni({ lang }) {
  return (
    <>
      <h2>{lang === 'it' ? 'Pubblicazioni' : 'Publications'}</h2>
      <ul>
        {lang === 'it' ? (
          <>
            <li>Isyde (ID: 111, pag 27), (ID: 125, pag 65) – <a href="https://www.isyde.org/wp-content/uploads/2024/07/Book_OF_Abstracts_Isyde_2024.pdf" target="_blank" rel="noopener noreferrer">Book of Abstract Link</a></li>
            <li>Poster alla conferenza: Machine Learning Methods for Complex and Quantum Systems - ML2025<br />
            4-6 giugno, Università di Camerino, Italia – <a href="https://files.spazioweb.it/ca/e2/cae2d341-22f1-4545-8c56-74fe28e72bad.pdf" target="_blank" rel="noopener noreferrer">Book of Abstract Link</a></li>
          </>
        ) : (
          <>
            <li>Isyde (ID: 111, p. 27), (ID: 125, p. 65) – <a href="https://www.isyde.org/wp-content/uploads/2024/07/Book_OF_Abstracts_Isyde_2024.pdf" target="_blank" rel="noopener noreferrer">Book of Abstract Link</a></li>
            <li>Poster at the conference: Machine Learning Methods for Complex and Quantum Systems - ML2025<br />
            June 4-6, University of Camerino, Italy – <a href="https://files.spazioweb.it/ca/e2/cae2d341-22f1-4545-8c56-74fe28e72bad.pdf" target="_blank" rel="noopener noreferrer">Book of Abstract Link</a></li>
          </>
        )}
      </ul>
    </>
  );
}
