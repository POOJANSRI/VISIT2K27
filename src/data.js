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
  sports: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/>',
};

export const EVENTS = [
  // LITERARY COMPETITIONS
  { name: 'JAM (Just A Minute)', description: 'Speak on a given topic for a minute without hesitation.', team: 'Solo', category: 'Literary', iconKey: 'paper', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Quiz (Technical & General)', description: 'Test your technical and general knowledge.', team: 'Team', category: 'Literary', iconKey: 'quiz', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Story Continuation', description: 'Continue the story from a given prompt.', team: 'Solo', category: 'Literary', iconKey: 'prompt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  
  // CULTURAL COMPETITIONS
  { name: 'Western Solo Dance', description: 'Showcase your western dance moves solo.', team: 'Solo', category: 'Cultural', iconKey: 'hunt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Western Group Dance', description: 'Group performance in western style.', team: 'Team', category: 'Cultural', iconKey: 'hunt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Classical Solo Dance', description: 'Traditional classical dance performance.', team: 'Solo', category: 'Cultural', iconKey: 'hunt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Spot Duo Dance', description: 'Impromptu duo dance on random tracks.', team: 'Duo', category: 'Cultural', iconKey: 'hunt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Singing Jodi', description: 'Duet singing competition.', team: 'Duo', category: 'Cultural', iconKey: 'prompt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Group Singing', description: 'Melodious group singing performance.', team: 'Team', category: 'Cultural', iconKey: 'prompt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Mono Action', description: 'Solo dramatic performance.', team: 'Solo', category: 'Cultural', iconKey: 'model', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Dialogue Dhamaka', description: 'Deliver famous dialogues with style.', team: 'Solo / Duo', category: 'Cultural', iconKey: 'model', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Short Film', description: 'Screening of student-made short films.', team: 'Team', category: 'Cultural', iconKey: 'hack', formLink: 'https://forms.gle/YOUR_LINK_HERE' },

  // TECHNICAL COMPETITIONS
  { name: 'Tech Treasure Hunt', description: 'A technical clue-based treasure hunt.', team: 'Team', category: 'Technical', iconKey: 'hunt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Poster Designing & Presentation', description: 'Design and present a technical poster.', team: 'Solo / Duo', category: 'Technical', iconKey: 'paper', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Project Expo', description: 'Exhibition of technical projects.', team: 'Team', category: 'Technical', iconKey: 'model', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Paper Presentation', description: 'Present technical research papers.', team: 'Solo / Duo', category: 'Technical', iconKey: 'paper', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Code relay', description: 'Relay coding competition.', team: 'Team', category: 'Technical', iconKey: 'code', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Tech Memes', description: 'Create hilarious technical memes.', team: 'Solo', category: 'Technical', iconKey: 'prompt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Pitch Your Ideas', description: 'Pitch your innovative startup ideas.', team: 'Solo / Team', category: 'Technical', iconKey: 'hack', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Debug War', description: 'Find and fix bugs in code fast.', team: 'Solo / Duo', category: 'Technical', iconKey: 'debug', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Speed typing championship', description: 'Test your typing speed and accuracy.', team: 'Solo', category: 'Technical', iconKey: 'code', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Dashboard Designing and Presentation (DS)', description: 'Only for DS students.', team: 'Solo / Duo', category: 'Technical', iconKey: 'model', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Build with AI models (AIML)', description: 'Only for AIML students.', team: 'Team', category: 'Technical', iconKey: 'hack', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Spot the Vulnerability (CS)', description: 'Only for CS students.', team: 'Solo / Duo', category: 'Technical', iconKey: 'debug', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Product marketing challenge (CSBS)', description: 'Only for CSBS students.', team: 'Team', category: 'Technical', iconKey: 'prompt', formLink: 'https://forms.gle/YOUR_LINK_HERE' },

  // SPORTS
  { name: 'Athletics - mens, womens', description: 'Track and field events.', team: 'Solo', category: 'Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Kabaddi - mens, womens', description: 'Traditional contact team sport.', team: 'Team', category: 'Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Kho-kho - mens, womens', description: 'Tag sport.', team: 'Team', category: 'Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Volley Ball - mens, womens', description: 'Team volleyball tournament.', team: 'Team', category: 'Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Badminton - mens, womens', description: 'Singles and doubles badminton.', team: 'Solo / Duo', category: 'Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Cricket - mens', description: 'Cricket tournament for men.', team: 'Team', category: 'Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Throw Ball - womens', description: 'Throw ball tournament for women.', team: 'Team', category: 'Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Tennicoit - womens', description: 'Ring tennis tournament for women.', team: 'Solo / Duo', category: 'Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Pickle Ball', description: 'Pickle ball tournament.', team: 'Solo / Duo', category: 'Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },

  // E SPORTS
  { name: 'E - chess', description: 'Online chess tournament.', team: 'Solo', category: 'E-Sports', iconKey: 'quiz', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'E - Football', description: 'Virtual football gaming competition.', team: 'Solo', category: 'E-Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Valorant', description: '5v5 tactical shooter tournament.', team: 'Team', category: 'E-Sports', iconKey: 'hack', formLink: 'https://forms.gle/YOUR_LINK_HERE' },
  { name: 'Smash karts', description: 'Multiplayer kart racing game.', team: 'Solo / Team', category: 'E-Sports', iconKey: 'sports', formLink: 'https://forms.gle/YOUR_LINK_HERE' }
];

// [[time, event, venue], ...]  per day
export const SCHEDULE = [
  // DAY 1
  [
    ['09:00', 'Inauguration Ceremony', '[Main Auditorium]'],
    ['10:00', 'Tech Treasure Hunt & Code Relay', '[Lab 1 & 2]'],
    ['10:30', 'JAM & Story Continuation (Literary)', '[Seminar Hall]'],
    ['11:00', 'Debug War & Speed Typing Championship', '[Lab 3]'],
    ['11:30', 'Spot the Vulnerability (CS)', '[CS Lab]'],
    ['12:00', 'E-Sports: Chess & Smash Karts', '[E-Sports Arena]'],
    ['13:00', 'Lunch Break', ''],
    ['14:00', 'Athletics & Badminton', '[Main Ground & Indoor Court]'],
    ['14:30', 'Kabaddi & Kho-kho (Mens/Womens)', '[Sports Complex]'],
    ['15:00', 'Western Solo Dance & Spot Duo Dance', '[Open Air Theatre]'],
    ['15:30', 'Volley Ball (Mens/Womens)', '[Volleyball Court]'],
    ['16:00', 'Singing Jodi & Mono Action', '[Main Auditorium]'],
    ['16:30', 'Poster Designing & Tech Memes', '[Creative Hub]'],
    ['18:00', 'Day 1 Closing', '[Main Auditorium]'],
  ],
  // DAY 2
  [
    ['09:00', 'Quiz (Technical & General)', '[Seminar Hall]'],
    ['09:30', 'Project Expo & Paper Presentation', '[Exhibition Hall]'],
    ['10:30', 'Pitch Your Ideas & Product Marketing', '[Conference Room]'],
    ['11:00', 'Build with AI models & Dashboard Designing', '[AIML Lab & DS Lab]'],
    ['11:30', 'E-Sports: Valorant & E-Football', '[E-Sports Arena]'],
    ['13:00', 'Lunch Break', ''],
    ['14:00', 'Cricket (Mens)', '[Main Ground]'],
    ['14:30', 'Throw Ball & Tennicoit (Womens)', '[Sports Complex]'],
    ['15:00', 'Pickle Ball', '[Indoor Court]'],
    ['15:30', 'Western Group Dance & Classical Solo', '[Open Air Theatre]'],
    ['16:00', 'Group Singing & Dialogue Dhamaka', '[Main Auditorium]'],
    ['16:30', 'Short Film Screening', '[Seminar Hall]'],
    ['17:30', 'Valedictory & Prize Distribution', '[Main Auditorium]'],
  ]
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
