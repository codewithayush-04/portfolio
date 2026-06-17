const fs = require('fs');
const jsPath = '/Users/ayushgupta/.gemini/antigravity-ide/brain/deb9d2aa-741e-4c98-92e3-7be4d43ece03/.system_generated/steps/309/content.md';

if (fs.existsSync(jsPath)) {
  const js = fs.readFileSync(jsPath, 'utf8');
  
  // Let's search for gsap.registerPlugin or gsap.timeline or ScrollTrigger
  const matches = [];
  const regex = /gsap|ScrollTrigger|scrollTrigger|lenis|Lenis|useScroll/gi;
  let match;
  while ((match = regex.exec(js)) !== null) {
    matches.push({ word: match[0], index: match.index });
  }
  console.log('Matches count:', matches.length);
  matches.forEach((m, idx) => {
    console.log(`${idx}: ${m.word} at ${m.index} context:`);
    console.log('  ', js.substring(m.index - 50, m.index + 150).replace(/\n/g, ' '));
  });
}
