import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5173;
const DIST_CLIENT = join(__dirname, '..', 'dist', 'client');

// Import the server handler
const { default: serverHandler } = await import(join(__dirname, '..', 'dist', 'server', 'server.js'));

const server = http.createServer(async (req, res) => {
  // Check if it's a static asset request
  if (req.url.startsWith('/assets/') || req.url === '/Kadambari-Galinde-Resume.pdf') {
    const filePath = path.join(DIST_CLIENT, req.url);
    
    // Security: prevent directory traversal
    if (!filePath.startsWith(DIST_CLIENT)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const contentTypes = {
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
        '.pdf': 'application/pdf',
      };

      const contentType = contentTypes[ext] || 'application/octet-stream';
      const stat = fs.statSync(filePath);
      
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': stat.size,
        'Cache-Control': 'public, max-age=31536000',
      });
      
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  }

  // Otherwise, use the TanStack Start server handler for SSR
  const proto = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host || `localhost:${PORT}`;
  const url = new URL(req.url, `${proto}://${host}`);

  const request = new Request(url, {
    method: req.method,
    headers: Object.fromEntries(
      Object.entries(req.headers).filter(([key]) => key !== 'host')
    ),
    body: ['GET', 'HEAD'].includes(req.method)
      ? null
      : req,
  });

  try {
    const response = await serverHandler.fetch(request);

    res.writeHead(response.status, Object.fromEntries(response.headers));

    if (response.body) {
      for await (const chunk of response.body) {
        res.write(chunk);
      }
    }
    res.end();
  } catch (err) {
    console.error('Server error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
