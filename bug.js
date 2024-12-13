const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the content-length header,
  // the client may not know when the response is complete.
  res.write('Hello, world!');
  // Missing res.end() to signal the end of the response
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});