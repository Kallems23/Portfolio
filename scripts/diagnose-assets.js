const fs = require('fs');
const path = require('path');

function diagnoseAssets() {
  console.log('=== ASSET DIAGNOSTIC ===\n');

  // 1. Check CSS files and their content
  console.log('1. CSS FILES:');
  const cssDir = path.join(__dirname, '../out/_next/static/css');
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    console.log(`Found ${cssFiles.length} CSS files:`);
    cssFiles.forEach(file => {
      console.log(`  - ${file}`);
      const content = fs.readFileSync(path.join(cssDir, file), 'utf-8');
      const imageUrls = content.match(/url\([^)]+\)/g) || [];
      if (imageUrls.length > 0) {
        console.log(`    Image URLs found: ${imageUrls.length}`);
        imageUrls.slice(0, 3).forEach(url => console.log(`      ${url}`));
        if (imageUrls.length > 3) console.log(`      ... and ${imageUrls.length - 3} more`);
      }
    });
  } else {
    console.log('  No CSS directory found!');
  }

  console.log('\n2. HTML REFERENCES:');
  const htmlFile = path.join(__dirname, '../out/index.html');
  if (fs.existsSync(htmlFile)) {
    const html = fs.readFileSync(htmlFile, 'utf-8');

    // Check CSS links
    const cssLinks = html.match(/rel="stylesheet"[^>]+href="([^"]+)"/g) || [];
    console.log(`CSS links: ${cssLinks.length}`);
    cssLinks.forEach(link => console.log(`  ${link}`));

    // Check image sources
    const imgSrcs = html.match(/src="([^"]+\.(png|jpg|jpeg|webp|svg))"/g) || [];
    console.log(`\nImage sources: ${imgSrcs.length}`);
    imgSrcs.slice(0, 5).forEach(src => console.log(`  ${src}`));
    if (imgSrcs.length > 5) console.log(`  ... and ${imgSrcs.length - 5} more`);
  }

  console.log('\n3. OUTPUT DIRECTORY STRUCTURE:');
  const outDir = path.join(__dirname, '../out');
  function listDir(dir, prefix = '') {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        console.log(`${prefix}📁 ${item}/`);
        if (prefix.length < 6) { // Limit depth
          listDir(fullPath, prefix + '  ');
        }
      } else {
        console.log(`${prefix}📄 ${item}`);
      }
    });
  }
  listDir(outDir);

  console.log('\n4. MISSING IMAGES CHECK:');
  // Extract image paths from CSS and check if they exist
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    const allImagePaths = new Set();

    cssFiles.forEach(file => {
      const content = fs.readFileSync(path.join(cssDir, file), 'utf-8');
      const matches = content.match(/url\(([^)]+)\)/g) || [];
      matches.forEach(match => {
        const url = match.match(/url\(([^)]+)\)/)[1].replace(/['"]/g, '');
        if (url.includes('/img/')) {
          allImagePaths.add(url);
        }
      });
    });

    console.log(`Found ${allImagePaths.size} unique image paths in CSS:`);
    Array.from(allImagePaths).slice(0, 10).forEach(imgPath => {
      // Remove /Portfolio prefix if present for file check
      const cleanPath = imgPath.replace(/^\/Portfolio/, '');
      const fullPath = path.join(__dirname, '../out', cleanPath);
      const exists = fs.existsSync(fullPath);
      console.log(`  ${exists ? '✅' : '❌'} ${imgPath}`);
    });
  }

  console.log('\n=== END DIAGNOSTIC ===');
}

diagnoseAssets();