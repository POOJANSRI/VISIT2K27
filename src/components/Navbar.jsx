import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { href: '#about',    label: 'About' },
  { href: '#events',   label: 'Events' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#prizes',   label: 'Prizes' },
  { href: '#contact',  label: 'Contact' },
];

export default function Navbar({ theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Scroll listener: progress bar + nav scroll state + active link
  useEffect(() => {
    const prog = document.querySelector('.progress');

    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (prog) prog.style.transform = `scaleX(${h ? y / h : 0})`;
      setScrolled(y > 40);

      // active section
      const sections = NAV_LINKS.map(l => document.querySelector(l.href));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= window.innerHeight * 0.55) {
          setActiveLink(NAV_LINKS[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        document.getElementById('burger')?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <div className="container nav-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href="#top" className="wordmark" aria-label="VISIT 2K27 home">
              VISIT<span>2K27</span>
            </a>
            <img 
              src="/Toplogo.jpg" 
              alt="Vignan's Foundation" 
              className="nav-top-logo"
            />
          </div>
          <div className="nav-right">
            <nav aria-label="Primary">
              <ul className="nav-links">
                {NAV_LINKS.map(l => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={activeLink === l.href ? 'active' : ''}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="icon-btn theme-toggle"
              id="themeBtn"
              aria-label="Toggle light and dark theme"
              onClick={onThemeToggle}
            >
              <svg className="moon" viewBox="0 0 24 24">
                <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
              </svg>
              <svg className="sun" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </button>

            <a href="#register" className="btn btn-outline magnetic">Register</a>

            <button
              className="icon-btn burger"
              id="burger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mmenu"
              onClick={() => setMenuOpen(o => !o)}
            >
              <div>
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`mmenu${menuOpen ? ' open' : ''}`}
        id="mmenu"
        aria-hidden={!menuOpen}
      >
        <ol>
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={closeMenu}>{l.label}</a>
            </li>
          ))}
        </ol>
        <a href="#register" className="btn btn-gold" onClick={closeMenu}>
          Register Now <span className="arrow">→</span>
        </a>
      </div>
    </>
  );
}
