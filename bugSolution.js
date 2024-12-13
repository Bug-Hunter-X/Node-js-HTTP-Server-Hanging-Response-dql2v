const http = require('http');

const server = http.createServer((req, res) => {
  const message = 'Hello, world!';
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(message)
  });
  res.write(message);
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});