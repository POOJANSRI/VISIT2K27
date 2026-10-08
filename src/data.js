// ── TODO: set real event start date/time ──
export const EVENT_START = new Date('2027-03-15T09:00:00+05:30');

// Thin-line SVG icon paths
export const ICONS = {
  prompt: '<path d="M5 6h14v10H9l-4 3z"/><path d="M9 11h6M9 8.5h3"/>',
  debug:  '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  code:   '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
  quiz:   '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17v.01"/>',
  hack:   '<rect x="3" y="5" width="18" height="12" rx="1"/><path d="M8 21h8M12 17v4M7 11l2-2M7 11l2 2M17 11l-2-2M17 11l-2 2"/>',
  hunt:   '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5M8 10.5h5M10.5 8v5"/>',
  model:  '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  paper:  '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 15.5h7M9 9h3"/>',
};

// [name, description, team, day, iconKey]
export const EVENTS = [
  ['Prompt Master',             'Prompt engineering challenge.',          'Solo / Duo', 'Day 1',   'prompt'],
  ['Debugging & Defend',        'Find the bugs, then defend your fix.',   'Duo',        'Day 1',   'debug'],
  ['Coding Contest',            'Competitive programming under pressure.','Solo',        'Day 1',   'code'],
  ['Technical Quiz',            'AI/ML and computer science trivia.',     'Duo',        'Day 2',   'quiz'],
  ['AI Hackathon',              'Build an AI/ML project against the clock.','2–4',      'Day 2–3', 'hack'],
  ['Data Hunt',                 'A clue-based data and puzzle hunt.',     '2–3',        'Day 2',   'hunt'],
  ['Model Showdown',            'Best accuracy on a given dataset.',      'Solo / Duo', 'Day 3',   'model'],
  ['Paper / Poster Presentation','Present your AI research ideas.',       '1–3',        'Day 3',   'paper'],
];

// [[time, event, venue], ...]  per day — TODO: confirm
export const SCHEDULE = [
  [
    ['09:00','Inauguration Ceremony','[Main Auditorium]'],
    ['10:30','Prompt Master','[Lab 1]'],
    ['13:30','Debugging & Defend','[Lab 2]'],
    ['15:30','Coding Contest','[Lab 3]'],
    ['18:00','Day 1 Closing','[Main Auditorium]'],
  ],
  [
    ['09:30','Technical Quiz — Prelims','[Seminar Hall]'],
    ['11:00','AI Hackathon begins','[Innovation Hub]'],
    ['14:00','Data Hunt','[Campus-wide]'],
    ['16:30','Technical Quiz — Finals','[Seminar Hall]'],
    ['19:00','Cultural Evening','[Open Air Theatre]'],
  ],
  [
    ['09:00','Model Showdown','[Lab 1]'],
    ['10:30','Paper / Poster Presentation','[Seminar Hall]'],
    ['11:00','AI Hackathon — Final Demos','[Innovation Hub]'],
    ['15:00','Jury Deliberation','[Conference Room]'],
    ['16:30','Valedictory & Prize Distribution','[Main Auditorium]'],
  ],
];

// [question, answer]
export const FAQ = [
  ['Who can participate?',         'Any undergraduate or postgraduate student from a recognised institution. Carry a valid college ID card. [Confirm eligibility rules]'],
  ['Is there a registration fee?', '[₹XXX per participant / per team]. The fee covers all events you register for, refreshments, and the participation kit.'],
  ['Is accommodation provided?',   'Limited accommodation is available on request for outstation participants. Contact a student coordinator at least [7] days in advance.'],
  ['Will I receive a certificate?','Yes. Every registered participant receives a certificate of participation; winners receive certificates of merit.'],
  ['What is the team size?',       'It varies by event — see each event card. Hackathon teams are 2–4 members; most other events are solo or duo.'],
  ['What should I bring?',         'College ID, a charged laptop with chargers (for technical events), and your registration confirmation.'],
];
