import { useState } from 'react';
import { SCHEDULE } from '../data';

const DAY_LABELS = SCHEDULE.map((_, i) => `Day ${i + 1}`);

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  const handleKeyDown = (e, i) => {
    const dirs = { ArrowRight: 1, ArrowLeft: -1 };
    const dir = dirs[e.key];
    if (dir !== undefined) {
      const next = (i + dir + DAY_LABELS.length) % DAY_LABELS.length;
      setActiveDay(next);
      document.getElementById(`t${next + 1}`)?.focus();
    }
  };

  return (
    <section id="schedule">
      <div className="container">
        <div className="sec-head rv">
          <span className="label">03 — Schedule</span>
          <h2>The <em>itinerary</em></h2>
        </div>

        <div className="tabs rv" role="tablist" aria-label="Festival days">
          {DAY_LABELS.map((day, i) => (
            <button
              key={i}
              className="tab"
              role="tab"
              id={`t${i + 1}`}
              aria-controls={`p${i + 1}`}
              aria-selected={activeDay === i}
              tabIndex={activeDay === i ? 0 : -1}
              onClick={() => setActiveDay(i)}
              onKeyDown={e => handleKeyDown(e, i)}
            >
              {day}
            </button>
          ))}
        </div>

        <div id="panels">
          {SCHEDULE.map((day, i) => (
            <div
              key={i}
              className="panel"
              id={`p${i + 1}`}
              role="tabpanel"
              aria-labelledby={`t${i + 1}`}
              hidden={activeDay !== i}
            >
              <ol className="timeline">
                {day.map(([time, event, venue], j) => (
                  <li className="tl" key={j}>
                    <time>{time}</time>
                    <strong>{event}</strong>
                    <span>{venue}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
