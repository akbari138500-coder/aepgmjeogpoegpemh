import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src="/tooth-icon.svg" alt="DentaLearn Logo" className="navbar__logo" />
          <span className="navbar__title">DentaLearn</span>
        </Link>
        <div className={`navbar__links ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="navbar__link">صفحه اصلی</NavLink>
          <NavLink to="/basic-sciences" className="navbar__link">علوم پایه</NavLink>
          <NavLink to="/clinical" className="navbar__link">دروس بالینی</NavLink>
          <NavLink to="/dashboard" className="navbar__link">داشبورد</NavLink>
        </div>
        <Link to="/basic-sciences" className="navbar__cta btn btn--primary btn--sm">شروع آزمون</Link>
        <button className="navbar__mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
