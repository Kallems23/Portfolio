const fs = require('fs');
const path = require('path');

// Function to fix image paths in CSS files for GitHub Pages
function fixCssPaths() {
  const cssDir = path.join(__dirname, '../out/_next/static/css');
  const basePath = '/Portfolio';

  if (!fs.existsSync(cssDir)) {
    console.log('CSS directory not found');
    return;
  }

  const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));

  cssFiles.forEach(file => {
    const filePath = path.join(cssDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace url(/img/...) with url(/Portfolio/img/...)
    content = content.replace(/url\(\/img\//g, `url(${basePath}/img/`);

    fs.writeFileSync(filePath, content);
    console.log(`Fixed paths in ${file}`);
  });

  console.log('CSS paths fixed for GitHub Pages');
}

// Function to copy CSS files to public directory for GitHub Pages compatibility
function copyCssToPublic() {
  const nextCssDir = path.join(__dirname, '../out/_next/static/css');
  const publicCssDir = path.join(__dirname, '../out/css');

  if (!fs.existsSync(nextCssDir)) {
    console.log('Next.js CSS directory not found');
    return;
  }

  // Create public CSS directory
  if (!fs.existsSync(publicCssDir)) {
    fs.mkdirSync(publicCssDir, { recursive: true });
  }

  // Copy all CSS files to public directory
  const cssFiles = fs.readdirSync(nextCssDir).filter(file => file.endsWith('.css'));
  cssFiles.forEach(file => {
    const srcPath = path.join(nextCssDir, file);
    const destPath = path.join(publicCssDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to public CSS directory`);
  });
}

// Function to ensure .nojekyll file exists for GitHub Pages
function ensureNojekyll() {
  const nojekyllPath = path.join(__dirname, '../out/.nojekyll');
  if (!fs.existsSync(nojekyllPath)) {
    fs.writeFileSync(nojekyllPath, '');
    console.log('Created .nojekyll file for GitHub Pages');
  }
}

// Always ensure .nojekyll exists (needed for _next directory)
ensureNojekyll();

// Function to update HTML files to use public CSS directory
function updateHtmlCssLinks() {
  const htmlFiles = ['index.html', '404.html'];

  htmlFiles.forEach(filename => {
    const htmlPath = path.join(__dirname, '../out', filename);
    if (fs.existsSync(htmlPath)) {
      let content = fs.readFileSync(htmlPath, 'utf-8');

      // Replace _next CSS links with public CSS links
      content = content.replace(/\/Portfolio\/_next\/static\/css\//g, '/Portfolio/css/');

      fs.writeFileSync(htmlPath, content);
      console.log(`Updated CSS links in ${filename}`);
    }
  });
}

// For GitHub Pages, also copy CSS to public directory as backup
if (process.env.GITHUB_PAGES === 'true') {
  fixCssPaths();
  copyCssToPublic();
  updateHtmlCssLinks();
}