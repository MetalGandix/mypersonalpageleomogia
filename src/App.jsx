import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import ChiSono from './components/ChiSono';
import Lauree from './components/Lauree';
import Passioni from './components/Passioni';
import Pubblicazioni from './components/Pubblicazioni';
import Social from './components/Social';
import './styles.css';

function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('it');
  const location = useLocation();

  const links = [
    ['/chi-sono', lang === 'it' ? 'Chi sono' : 'About me'],
    ['/lauree', lang === 'it' ? 'Lauree' : 'Degrees'],
    ['/pubblicazioni', lang === 'it' ? 'Pubblicazioni' : 'Publications'],
    ['/passioni', lang === 'it' ? 'Passioni' : 'Passions'],
    ['/social', 'Social'],
  ];

  return (
    <div className="site-shell">
      <nav className="navbar" aria-label="Navigazione principale">
        <NavLink to="/chi-sono" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">LM</span>
          <span className="brand-copy">Leonardo Mogianesi<small>Research · Education · Tech</small></span>
        </NavLink>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'} aria-expanded={menuOpen}>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
        </button>
        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
          ))}
          <span className="language-switch" aria-label="Lingua">
            <button type="button" onClick={() => setLang('it')} className={lang === 'it' ? 'selected' : ''} aria-pressed={lang === 'it'}>
              <img src="/immagini/italy.png" alt="" /> IT
            </button>
            <button type="button" onClick={() => setLang('en')} className={lang === 'en' ? 'selected' : ''} aria-pressed={lang === 'en'}>
              <img src="/immagini/england.png" alt="" /> EN
            </button>
          </span>
        </div>
      </nav>
      <main className="main-content" key={location.pathname}>
        <Routes>
          <Route path="/" element={<ChiSono lang={lang} />} />
          <Route path="/chi-sono" element={<ChiSono lang={lang} />} />
          <Route path="/lauree" element={<Lauree lang={lang} />} />
          <Route path="/pubblicazioni" element={<Pubblicazioni lang={lang} />} />
          <Route path="/passioni" element={<Passioni lang={lang} />} />
          <Route path="/social" element={<Social lang={lang} />} />
        </Routes>
      </main>
      <footer>© {new Date().getFullYear()} Leonardo Mogianesi</footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Site />
    </Router>
  );
}
