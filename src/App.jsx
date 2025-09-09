import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ChiSono from './components/ChiSono';
import Lauree from './components/Lauree';
import Passioni from './components/Passioni';
import Pubblicazioni from './components/Pubblicazioni';
import Social from './components/Social';
import './styles.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('it');

  return (
    <Router>
      <nav className="navbar">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
        </button>
        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/chi-sono" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{lang === 'it' ? 'Chi sono' : 'About me'}</NavLink>
          <NavLink to="/lauree" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{lang === 'it' ? 'Lauree' : 'Degrees'}</NavLink>
          <NavLink to="/pubblicazioni" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{lang === 'it' ? 'Pubblicazioni' : 'Publications'}</NavLink>
          <NavLink to="/passioni" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{lang === 'it' ? 'Passioni' : 'Passions'}</NavLink>
          <NavLink to="/social" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{lang === 'it' ? 'Social' : 'Social'}</NavLink>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <button type="button" onClick={() => setLang('it')} style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>
              <img src="/immagini/italy.png" alt="Italiano" style={{width: '32px', height: '22px', borderRadius: '50%', boxShadow: lang === 'it' ? '0 0 8px #2a3cff' : 'none', border: lang === 'it' ? '3px solid #2a3cff' : '2px solid #eee', transition: 'border 0.2s'}} />
            </button>
            <button type="button" onClick={() => setLang('en')} style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>
              <img src="/immagini/england.png" alt="English" style={{width: '32px', height: '22px', borderRadius: '50%', boxShadow: lang === 'en' ? '0 0 8px #2a3cff' : 'none', border: lang === 'en' ? '3px solid #2a3cff' : '2px solid #eee', transition: 'border 0.2s'}} />
            </button>
          </span>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ChiSono lang={lang} />} />
          <Route path="/chi-sono" element={<ChiSono lang={lang} />} />
          <Route path="/lauree" element={<Lauree lang={lang} />} />
          <Route path="/pubblicazioni" element={<Pubblicazioni lang={lang} />} />
          <Route path="/passioni" element={<Passioni lang={lang} />} />
          <Route path="/social" element={<Social lang={lang} />} />
        </Routes>
      </main>
    </Router>
  );
}
