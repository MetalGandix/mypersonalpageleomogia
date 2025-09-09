import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import ChiSono from './components/ChiSono';
import Lauree from './components/Lauree';
import Passioni from './components/Passioni';
import Pubblicazioni from './components/Pubblicazioni';
import Social from './components/Social';
import './styles.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav className="navbar">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
        </button>
        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/chi-sono" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Chi sono</NavLink>
          <NavLink to="/lauree" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Lauree</NavLink>
          <NavLink to="/pubblicazioni" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Pubblicazioni</NavLink>
          <NavLink to="/passioni" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Passioni</NavLink>
          <NavLink to="/social" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Social</NavLink>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-sono" element={<ChiSono />} />
          <Route path="/lauree" element={<Lauree />} />
          <Route path="/pubblicazioni" element={<Pubblicazioni />} />
          <Route path="/passioni" element={<Passioni />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </main>
    </Router>
  );
}
