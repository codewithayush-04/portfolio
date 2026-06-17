const fs = require('fs');

const cssPath = '/Users/ayushgupta/.gemini/antigravity-ide/brain/deb9d2aa-741e-4c98-92e3-7be4d43ece03/.system_generated/steps/301/content.md';
const jsPath = '/Users/ayushgupta/.gemini/antigravity-ide/brain/deb9d2aa-741e-4c98-92e3-7be4d43ece03/.system_generated/steps/309/content.md';

console.log('--- CSS INSPECTION ---');
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8');
  // Find all classes that have transition, transform, keyframes, scroll, sticky, fixed, etc.
  const classes = [];
  const regex = /\.([a-zA-Z0-9_-]+)\s*\{([^}]+)\}/g;
  let match;
  while ((match = regex.exec(css)) !== null) {
    const className = match[1];
    const rules = match[2];
    if (rules.includes('sticky') || rules.includes('fixed') || rules.includes('scroll') || rules.includes('animation') || rules.includes('transform') || rules.includes('transition')) {
      classes.push({ className, rules: rules.trim() });
    }
  }
  console.log(`Found ${classes.length} classes with scroll/animation rules:`);
  classes.slice(0, 30).forEach(c => {
    console.log(`  .${c.className}: ${c.rules.substring(0, 150)}...`);
  });
} else {
  console.log('CSS path does not exist');
}

console.log('\n--- JS ROUTING & SECTIONS ---');
if (fs.existsSync(jsPath)) {
  const js = fs.readFileSync(jsPath, 'utf8');
  // Check for some main elements
  const keySections = ['th-section', 'sw-section', 'acar-section', 'sh-section', 'hch-section'];
  keySections.forEach(sec => {
    const idx = js.indexOf(sec);
    if (idx !== -1) {
      console.log(`Section ${sec} found. Snippet:`);
      console.log(js.substring(idx - 100, idx + 400).replace(/\n/g, ' '));
      console.log('-----------------');
    }
  });
}
