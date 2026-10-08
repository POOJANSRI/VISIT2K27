import { useState, useRef, useEffect } from 'react';
import { EVENTS } from '../data';

// TODO: paste Google Form / Apps Script endpoint here
const ENDPOINT = '';

function Field({ id, name, label, type = 'text', pattern, autoComplete, required = true, errMsg }) {
  const [invalid, setInvalid] = useState(false);
  const ref = useRef(null);

  const validate = () => {
    const el = ref.current;
    const ok = el.checkValidity() && el.value.trim() !== '';
    setInvalid(!ok);
    el.setAttribute('aria-invalid', !ok);
    return ok;
  };

  return (
    <div className={`field${invalid ? ' invalid' : ''}`}>
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder=" "
        required={required}
        pattern={pattern}
        autoComplete={autoComplete}
        onBlur={() => { if (ref.current.value) validate(); }}
        onInput={() => { if (invalid) validate(); }}
      />
      <label htmlFor={id}>{label}</label>
      <span className="err">{errMsg}</span>
    </div>
  );
}

export default function Register({ selectedEvents, setSelectedEvents }) {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberCount, setMemberCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [evInvalid, setEvInvalid] = useState(false);
  const formRef = useRef(null);
  const yearRef = useRef(null);
  const [yearFilled, setYearFilled] = useState(false);

  // Pre-select pill if coming from modal
  const togglePill = name => {
    setSelectedEvents(prev =>
      prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]
    );
    setEvInvalid(false);
  };

  const addMember = () => {
    if (teamMembers.length >= 4) return;
    const id = memberCount + 1;
    setMemberCount(id);
    setTeamMembers(prev => [...prev, id]);
  };

  const removeMember = id => setTeamMembers(prev => prev.filter(x => x !== id));

  const handleSubmit = e => {
    e.preventDefault();
    const form = formRef.current;
    let ok = true, firstBad = null;

    form.querySelectorAll('[required]').forEach(el => {
      const valid = el.checkValidity() && el.value.trim() !== '';
      el.closest('.field')?.classList.toggle('invalid', !valid);
      el.setAttribute('aria-invalid', !valid);
      if (!valid) { ok = false; firstBad = firstBad || el; }
    });

    if (!selectedEvents.length) { ok = false; setEvInvalid(true); }

    if (!ok) { firstBad?.focus(); return; }

    const data = Object.fromEntries(new FormData(form));
    data.events = selectedEvents.join(', ');
    data.members = Array.from(form.querySelectorAll('[name="member[]"]'))
      .map(i => i.value).filter(Boolean).join(', ');

    const done = () => {
      form.querySelectorAll('.field').forEach(f => f.style.display = 'none');
      setSubmitted(true);
    };

    if (ENDPOINT) {
      fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(data) })
        .then(done).catch(done);
    } else {
      done();
    }
  };

  return (
    <section id="register">
      <div className="container reg-wrap">
        <div className="reg-aside rv">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="label">05 — Register</span>
            <h2>Claim your <em>seat</em></h2>
          </div>
          <p>
            Registration closes on [DD Month 2027]. You'll receive a confirmation email with your
            participant ID.
          </p>
        </div>

        <form className="form rv" id="regForm" ref={formRef} noValidate onSubmit={handleSubmit}>
          <Field id="f-name"    name="name"       label="Full name"      autoComplete="name"  errMsg="Please share your name." />
          <Field id="f-email"   name="email"      label="Email"          type="email" autoComplete="email" errMsg="That email doesn't look quite right." />
          <Field id="f-phone"   name="phone"      label="Phone"          type="tel" pattern="[0-9+\s\-]{10,15}" autoComplete="tel" errMsg="Please enter a 10-digit number." />
          <Field id="f-college" name="college"    label="College"        errMsg="Which college are you from?" />
          <Field id="f-dept"    name="department" label="Department"     errMsg="Please add your department." />

          {/* Year select */}
          <div className="field">
            <select
              id="f-year"
              name="year"
              required
              ref={yearRef}
              className={yearFilled ? 'filled' : ''}
              onChange={() => setYearFilled(!!yearRef.current.value)}
            >
              <option value="" hidden />
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
              <option>Postgraduate</option>
            </select>
            <label htmlFor="f-year">Year of study</label>
            <span className="err">Please choose your year.</span>
          </div>

          {/* Event pills */}
          <fieldset className={`field full${evInvalid ? ' invalid' : ''}`} style={{ border: 0 }} id="evField">
            <legend className="label">Select events</legend>
            <div className="pills" id="pills">
              {EVENTS.map(ev => (
                <button
                  key={ev[0]}
                  type="button"
                  className="pill"
                  aria-pressed={selectedEvents.includes(ev[0])}
                  onClick={() => togglePill(ev[0])}
                >
                  {ev[0]}
                </button>
              ))}
            </div>
            <span className="err">Pick at least one event.</span>
          </fieldset>

          {/* Team members */}
          <div className="field full">
            <span className="label">Team members (optional)</span>
            <div className="team" id="team">
              {teamMembers.map(id => (
                <div className="team-row" key={id}>
                  <div className="field">
                    <input id={`tm${id}`} name="member[]" placeholder=" " autoFocus />
                    <label htmlFor={`tm${id}`}>Member name</label>
                  </div>
                  <button
                    type="button"
                    className="link-btn"
                    aria-label="Remove member"
                    onClick={() => removeMember(id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button type="button" className="link-btn" id="addMember" onClick={addMember}>
              + Add member
            </button>
          </div>

          {/* Submit */}
          <div className="field full">
            <button type="submit" className="btn btn-gold magnetic">
              Submit registration <span className="arrow">→</span>
            </button>
          </div>

          {/* Success */}
          {submitted && (
            <div className="success show" id="success" role="status" aria-live="polite" tabIndex="-1">
              <svg viewBox="0 0 72 72">
                <circle cx="36" cy="36" r="32" />
                <path d="M23 37l9 9 17-19" />
              </svg>
              <h3>You're in.</h3>
              <p className="muted">Thank you — we'll be in touch at the email you provided.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
