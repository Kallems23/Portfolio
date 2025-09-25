const fs = require('fs');
const path = require('path');

// Create a minimal test page to verify assets loading
const testHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asset Test - Portfolio</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #1a1a1a; color: white; }
        .test-item { margin: 10px 0; padding: 10px; border: 1px solid #333; }
        .success { border-color: #4CAF50; background: #2d4a2d; }
        .error { border-color: #f44336; background: #4a2d2d; }
        img { max-width: 200px; height: auto; margin: 10px 0; }
        .bg-test { width: 200px; height: 100px; border: 2px solid #666; margin: 10px 0; }
        .main-image-1 { background-image: url(/Portfolio/img/noah/noah_pp_1400x1000.png); background-size: cover; background-position: center; }
    </style>
</head>
<body>
    <h1>🔧 Portfolio Assets Test Page</h1>
    <p>This page tests if all assets load correctly on GitHub Pages.</p>

    <div class="test-item">
        <h3>📄 CSS Files Test</h3>
        <p>Check browser DevTools > Network tab to see if CSS files load with 200 status.</p>
        <p>Expected CSS files:</p>
        <ul>
            <li>/Portfolio/_next/static/css/0c8e4ee9276d0005.css</li>
            <li>/Portfolio/_next/static/css/12f5f25cb1a79e54.css</li>
            <li>/Portfolio/_next/static/css/5c53fd60bb8819cf.css</li>
        </ul>
    </div>

    <div class="test-item">
        <h3>🖼️ Image Loading Test</h3>
        <p>Direct image references:</p>
        <img src="/Portfolio/img/noah/noah_pp_1400x1000.png" alt="Profile Picture" onerror="this.style.border='3px solid red'" onload="this.style.border='3px solid green'">
        <img src="/Portfolio/img/icons/icon-java.svg" alt="Java Icon" onerror="this.style.border='3px solid red'" onload="this.style.border='3px solid green'">
        <img src="/Portfolio/img/noah/sprite_pc.png" alt="PC Sprite" onerror="this.style.border='3px solid red'" onload="this.style.border='3px solid green'">
    </div>

    <div class="test-item">
        <h3>🎨 CSS Background Images Test</h3>
        <p>CSS background images (should show background):</p>
        <div class="bg-test main-image-1"></div>
    </div>

    <div class="test-item">
        <h3>📋 Debug Info</h3>
        <p><strong>Current URL:</strong> <span id="current-url"></span></p>
        <p><strong>Base URL should end with:</strong> /Portfolio/test.html</p>
        <p><strong>CSS Stylesheets loaded:</strong> <span id="css-count"></span></p>
        <p><strong>Images loaded:</strong> <span id="img-count"></span></p>
    </div>

    <script>
        document.getElementById('current-url').textContent = window.location.href;
        document.getElementById('css-count').textContent = document.styleSheets.length;
        document.getElementById('img-count').textContent = document.images.length;

        // Check for main stylesheet
        let cssFound = false;
        for (let i = 0; i < document.styleSheets.length; i++) {
            const href = document.styleSheets[i].href || '';
            if (href.includes('_next/static/css/')) {
                cssFound = true;
                break;
            }
        }

        if (cssFound) {
            console.log('✅ Next.js CSS found');
        } else {
            console.log('❌ Next.js CSS NOT found');
        }
    </script>
</body>
</html>`;

const testFilePath = path.join(__dirname, '../out/test.html');
fs.writeFileSync(testFilePath, testHtml);
console.log('✅ Test page created at: out/test.html');
console.log('📝 After deploying, visit: https://kallems23.github.io/Portfolio/test.html');