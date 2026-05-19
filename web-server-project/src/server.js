const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Prefer serving a built Vite app from ../dist if available, otherwise fall back to ../public
const distPath = path.join(__dirname, '..', '..', 'dist');
const publicPath = path.join(__dirname, '..', 'public');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  console.log('Serving built app from', distPath);
} else {
  app.use(express.static(publicPath));
  console.log('Serving static files from', publicPath);
}

// SPA fallback to index.html
app.get('*', (req, res) => {
  const indexFile = fs.existsSync(path.join(distPath, 'index.html'))
    ? path.join(distPath, 'index.html')
    : path.join(publicPath, 'index.html');
  res.sendFile(indexFile);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});