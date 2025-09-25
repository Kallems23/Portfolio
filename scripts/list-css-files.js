const fs = require('fs');
const path = require('path');

function listCssFiles() {
  console.log('=== CURRENT CSS FILES ===');

  const cssDir = path.join(__dirname, '../out/_next/static/css');
  const htmlFile = path.join(__dirname, '../out/index.html');

  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    console.log('\n1. CSS files in /out/_next/static/css/:');
    cssFiles.forEach(file => {
      console.log(`   - ${file}`);
      console.log(`   - URL: https://kallems23.github.io/Portfolio/_next/static/css/${file}`);
    });
  }

  if (fs.existsSync(htmlFile)) {
    const html = fs.readFileSync(htmlFile, 'utf-8');
    const cssLinks = html.match(/href="[^"]*\.css[^"]*"/g) || [];
    console.log('\n2. CSS links in HTML:');
    cssLinks.forEach(link => {
      console.log(`   - ${link}`);
    });
  }

  console.log('\n3. Test these URLs manually:');
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    cssFiles.forEach(file => {
      console.log(`   https://kallems23.github.io/Portfolio/_next/static/css/${file}`);
    });
  }
}

listCssFiles();