import React from 'react';

export default function Lauree({ lang }) {
  return (
    <>
      <h2>{lang === 'it' ? 'Lauree' : 'Degrees'}</h2>
      <ul>
        {lang === 'it' ? (
          <>
            <li>Ph.D. in LESDIT (Learning Sciences and Digital Technologies) – Università di Modena e Reggio Emilia (dal 2023)</li>
            <li>Laurea Magistrale in Computer Science – Università di Camerino (UNICAM), 2023, Voto: 106/110</li>
            <li>Laurea Triennale in Informatica – Università di Camerino (UNICAM)</li>
          </>
        ) : (
          <>
            <li>Ph.D. in LESDIT (Learning Sciences and Digital Technologies) – University of Modena and Reggio Emilia (since 2023)</li>
            <li>MSc in Computer Science – University of Camerino (UNICAM), 2023, Grade: 106/110</li>
            <li>BSc in Computer Science – University of Camerino (UNICAM)</li>
          </>
        )}
      </ul>
    </>
  );
}
