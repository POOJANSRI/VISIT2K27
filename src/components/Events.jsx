import { useState, useMemo } from 'react';
import { EVENTS, ICONS } from '../data';

function EventModal({ event, onClose }) {
  if (!event) return null;

  const li = items => items.map((x, i) => <li key={i}>{x}</li>);

  return (
    <div
      className="modal open"
      id="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mTitle"
      aria-hidden="false"
    >
      <div className="modal-bg" onClick={onClose} />
      <div className="modal-box" tabIndex="-1">
        <button
          className="icon-btn modal-close"
          data-close
          aria-label="Close dialog"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <span className="label" id="mNo">{event.category}</span>
        <h3 id="mTitle">{event.name}</h3>
        <p className="muted" id="mDesc">{event.description}</p>

        <div className="m-grid" id="mGrid">
          <div>
            <h4 className="label">Rules</h4>
            <ul>{li([`Team size: ${event.team}`, 'Bring a valid college ID', 'Judges\u2019 decision is final', '[Event-specific rules]'])}</ul>
          </div>
          <div>
            <h4 className="label">Rounds</h4>
            <ul>{li(['Round 1 — [Preliminary]', 'Round 2 — [Final]'])}</ul>
          </div>
          <div>
            <h4 className="label">Eligibility</h4>
            <ul>{li(['Open to all UG/PG students', '[Any prerequisites]'])}</ul>
          </div>
          <div>
            <h4 className="label">When &amp; Where</h4>
            <ul>{li([`[Time], [Date]`, '[Venue / Lab]'])}</ul>
          </div>
          <div>
            <h4 className="label">Coordinators</h4>
            <ul>{li(['[Name] · [+91 00000 00000]', '[Name] · [+91 00000 00000]'])}</ul>
          </div>
        </div>

        <a 
          href={event.formLink || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-gold magnetic" 
          style={{ marginTop: '24px', display: 'inline-flex' }}
        >
          Register for this event <span className="arrow">→</span>
        </a>

      </div>
    </div>
  );
}

export default function Events({ onSelectEvent }) {
  const [openEvent, setOpenEvent] = useState(null);
  const categories = useMemo(() => [...new Set(EVENTS.map(e => e.category))], []);

  // Close on Escape
  const handleKey = (e, ev) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenEvent(ev); }
  };

  const closeModal = () => {
    setOpenEvent(null);
    document.body.style.overflow = '';
  };

  const openModal = ev => {
    setOpenEvent(ev);
    document.body.style.overflow = 'hidden';
  };

  return (
    <section id="events">
      <div className="container">
        <div className="sec-head rv">
          <span className="label">02 — Events</span>
          <h2>A variety of events. <em>One stage.</em></h2>
        </div>

        <div className="events-container">
          {categories.map(cat => (
            <div key={cat} style={{ marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--gold)', marginBottom: '1.5rem', borderBottom: '1px solid var(--line)', paddingBottom: '0.5rem' }}>
                {cat}
              </h3>
              <div className="events-grid" id={`eventsGrid-${cat}`}>
                {EVENTS.filter(e => e.category === cat).map((e, i) => (
                  <button
                    key={e.name}
                    className="ev rv in"
                    type="button"
                    aria-haspopup="dialog"
                    onClick={() => openModal(e)}
                    onKeyDown={ev => handleKey(ev, e)}
                  >
                    <div className="ev-node tl"></div>
                    <div className="ev-node tr"></div>
                    <div className="ev-node bl"></div>
                    <div className="ev-node br"></div>
                    <div className="ev-top">
                      <span className="ev-no">{(i + 1).toString().padStart(2, '0')}</span>
                      <svg viewBox="0 0 24 24" aria-hidden="true"
                        dangerouslySetInnerHTML={{ __html: ICONS[e.iconKey] || ICONS['prompt'] }}
                      />
                    </div>
                    <h3>{e.name}</h3>
                    <p>{e.description}</p>
                    <div className="ev-meta">
                      <span>Team: {e.team}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {openEvent && (
        <EventModal
          event={openEvent}
          onClose={closeModal}
          onRegister={onSelectEvent}
        />
      )}
    </section>
  );
}
