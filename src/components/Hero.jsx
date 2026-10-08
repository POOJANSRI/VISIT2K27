import { useState, useEffect, useRef } from 'react';
import { EVENT_START } from '../data';
import { useMagnetic } from '../hooks';


function pad(n) { return String(n).padStart(2, '0'); }

function CountCell({ label, value }) {
  return (
    <div className="cd-cell">
      <span className="cd-num" aria-live="polite">
        <span>{value}</span>
      </span>
      <small>{label}</small>
    </div>
  );
}

export default function Hero() {
  const [cd, setCd] = useState({ d: '00', h: '00', m: '00', s: '00' });
  const [heroGo, setHeroGo] = useState(false);
  const reg1 = useRef(null);
  const reg2 = useRef(null);
  useMagnetic(reg1);
  useMagnetic(reg2);

  // Hero reveal (triggered after preloader)
  useEffect(() => {
    const t = setTimeout(() => setHeroGo(true), 200);
    return () => clearTimeout(t);
  }, []);

  // Countdown
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, EVENT_START - new Date());
      setCd({
        d: pad(Math.floor(diff / 864e5)),
        h: pad(Math.floor(diff / 36e5) % 24),
        m: pad(Math.floor(diff / 6e4) % 60),
        s: pad(Math.floor(diff / 1e3) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={`hero${heroGo ? ' go' : ''}`} id="top" aria-label="VISIT 2K27">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video-bg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="container hero-in">
        <div className="line">
          <p className="label" style={{ letterSpacing: '0.15em', opacity: 0.9 }}>Department of AIML · Vignan's Foundation for Science, Technology & Research</p>
        </div>

        <h1 className="hero-title">
          <span className="line">
            <span className="gold-text">VISIT 2K27</span>
          </span>
        </h1>

        <div className="line">
          <p className="tagline">Where Intelligence Meets Innovation</p>
        </div>

        <div className="line">
          <p className="meta-line">
            <span><b>Dates</b>&nbsp; [DD–DD Month 2027]</span>
            <span><b>Venue</b>&nbsp; [Campus / Venue]</span>
          </p>
        </div>

        <div className="line">
          <div className="countdown" role="timer" aria-label="Countdown to VISIT 2K27">
            <CountCell label="Days"    value={cd.d} />
            <CountCell label="Hours"   value={cd.h} />
            <CountCell label="Minutes" value={cd.m} />
            <CountCell label="Seconds" value={cd.s} />
          </div>
        </div>

        <div className="line">
          <div className="hero-cta">
            <a ref={reg1} href="#register" className="btn btn-gold magnetic">
              Register Now <span className="arrow">→</span>
            </a>
            <a href="#events" className="btn btn-ghost">Explore Events</a>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-ind" aria-label="Scroll to About">
        <i /><span>SCROLL</span>
      </a>
    </section>
  );
}
