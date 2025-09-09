import React from 'react';

export default function Social({ lang }) {
  return (
    <>
      <h2>{lang === 'it' ? 'Social' : 'Social'}</h2>
      <ul className="social-list">
        <li>
          <a href="https://www.instagram.com/mogiardoo/" target="_blank" rel="noopener noreferrer">
            <span style={{verticalAlign: 'middle', marginRight: '8px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" fill="#fff" stroke="#E1306C" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#E1306C" strokeWidth="2"/><circle cx="18" cy="6" r="1.5" fill="#E1306C"/></svg>
            </span>
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/leonardo-mogianesi-262968196/" target="_blank" rel="noopener noreferrer">
            <span style={{verticalAlign: 'middle', marginRight: '8px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" stroke="#0077B5" strokeWidth="2"/><rect x="6" y="10" width="2" height="6" fill="#0077B5"/><rect x="10" y="10" width="2" height="6" fill="#0077B5"/><circle cx="7" cy="7" r="1" fill="#0077B5"/><rect x="14" y="10" width="4" height="6" fill="#0077B5"/></svg>
            </span>
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://x.com/MC_Gandix" target="_blank" rel="noopener noreferrer">
            <span style={{verticalAlign: 'middle', marginRight: '8px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" stroke="#000" strokeWidth="2"/><path d="M7 17L17 7M7 7l10 10" stroke="#000" strokeWidth="2"/></svg>
            </span>
            X (Twitter)
          </a>
        </li>
        <li>
          <a href="https://orcid.org/0009-0009-6414-3602" target="_blank" rel="noopener noreferrer">
            <span style={{verticalAlign: 'middle', marginRight: '8px'}}>
              {/* ORCID SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#A6CE39"/><text x="7" y="17" fontSize="10" fill="#fff">ORCID</text></svg>
            </span>
            ORCID
          </a>
        </li>
        <li>
          <a href="https://openbadgepassport.com/app/profile/253517" target="_blank" rel="noopener noreferrer">
            <span style={{verticalAlign: 'middle', marginRight: '8px'}}>
              {/* OpenBadge SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F5A623"/><circle cx="12" cy="12" r="5" fill="#fff"/><text x="8" y="16" fontSize="8" fill="#F5A623">OB</text></svg>
            </span>
            OpenBadge
          </a>
        </li>
        <li>
          <a href="https://www.ssbwiki.com/Smasher:GANDIX" target="_blank" rel="noopener noreferrer">
            <span style={{verticalAlign: 'middle', marginRight: '8px', display: 'inline-flex', alignItems: 'center'}}>
              <img src="/immagini/Smash_Ball.png" alt="Smash Ball" style={{width: '22px', height: '22px', marginLeft: '2px'}} />
            </span>
            {lang === 'it' ? 'Profilo Smasher' : 'Smasher Profile'}
          </a>
        </li>
      </ul>
    </>
  );
}
