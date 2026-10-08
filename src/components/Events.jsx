import { useState } from 'react';
import { EVENTS, ICONS } from '../data';

function EventModal({ idx, onClose, onRegister }) {
  const e = EVENTS[idx];
  if (!e) return null;

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

        <span className="label" id="mNo">Event 0{idx + 1} · {e[3]}</span>
        <h3 id="mTitle">{e[0]}</h3>
        <p className="muted" id="mDesc">{e[1]}</p>

        <div className="m-grid" id="mGrid">
          <div>
            <h4 className="label">Rules</h4>
            <ul>{li([`Team size: ${e[2]}`, 'Bring a valid college ID', 'Judges\u2019 decision is final', '[Event-specific rules]'])}</ul>
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
            <ul>{li([`${e[3]}, [HH:MM]`, '[Venue / Lab]'])}</ul>
          </div>
          <div>
            <h4 className="label">Coordinators</h4>
            <ul>{li(['[Name] · [+91 00000 00000]', '[Name] · [+91 00000 00000]'])}</ul>
          </div>
        </div>

        <button className="btn btn-gold" id="mReg" onClick={() => { onRegister(idx); onClose(); }}>
          Register for this event <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default function Events({ onSelectEvent }) {
  const [openIdx, setOpenIdx] = useState(null);

  // Close on Escape
  const handleKey = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenIdx(idx); }
  };

  const closeModal = () => {
    setOpenIdx(null);
    document.body.style.overflow = '';
  };

  const openModal = idx => {
    setOpenIdx(idx);
    document.body.style.overflow = 'hidden';
  };

  return (
    <section id="events">
      <div className="container">
        <div className="sec-head rv">
          <span className="label">02 — Events</span>
          <h2>Eight disciplines. <em>One stage.</em></h2>
        </div>

        <div className="events-grid" id="eventsGrid">
          {EVENTS.map((e, i) => (
            <button
              key={i}
              className="ev rv"
              type="button"
              aria-haspopup="dialog"
              onClick={() => openModal(i)}
              onKeyDown={ev => handleKey(ev, i)}
            >
              <div className="ev-top">
                <span className="ev-no">0{i + 1}</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: ICONS[e[4]] }}
                />
              </div>
              <h3>{e[0]}</h3>
              <p>{e[1]}</p>
              <div className="ev-meta">
                <span>Team {e[2]}</span>
                <span>{e[3]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <EventModal
          idx={openIdx}
          onClose={closeModal}
          onRegister={onSelectEvent}
        />
      )}
    </section>
  );
}
