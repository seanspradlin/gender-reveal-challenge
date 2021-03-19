const path = require('path');
const querystring = require('querystring');
const open = require('open');
const fs = require('fs');
const { URL } = require('url');
const http = require('http');
const { generateToken } = require('./lib/generate-token');

async function createServer(port) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, `http://localhost:${port}`);
      const filename = url.filepath || 'index.html';
      const filepath = path.join(__dirname, 'static', filename);
      fs.readFile(filepath, (error, data) => {
        if (error) {
          res.writeHead(404);
          res.end(JSON.stringify(error));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
    });
    server.listen(port, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(server);
      }
    });
  });
}

async function execute() {
  const port = 8080;
  await createServer(port);
  const code = generateToken({
    mother: 'Nicole',
    father: 'Calvin',
    yearsTogether: 4,
  });
  const qs = querystring.stringify({ gendercode: code });
  const uri = `http://localhost:${port}/index.html?${qs}`;
  await open(uri, { wait: true });
}

execute().then(() => {
  console.log('Congratulations!');
}).catch((err) => {
  console.error(err);
});
