const fs = require('fs');
let code = fs.readFileSync('src/data.js', 'utf8');
code = code.replace(/iconKey: '([^']+)'( )*}/g, "iconKey: '$1', formLink: 'https://forms.gle/YOUR_LINK_HERE' }");
fs.writeFileSync('src/data.js', code);
