import http from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5173;

// Import the server handler
const { default: serverHandler } = await import(join(__dirname, '..', 'dist', 'server', 'server.js'));

const server = http.createServer(async (req, res) => {
  // Build a Fetch API compatible Request
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
    // Call the server handler
    const response = await serverHandler.fetch(request);

    // Send response headers
    res.writeHead(response.status, Object.fromEntries(response.headers));

    // Send response body
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
