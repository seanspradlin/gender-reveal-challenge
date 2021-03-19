const path = require('path');
const querystring = require('querystring');
const open = require('open');

function generateFilepath() {
  const root = path.join(__dirname, 'static', 'index.html');
  const params = querystring.stringify({
    token: 'foo',
  });
  return `${root}?${params}`;
}

const filepath = generateFilepath();

open(filepath).then(() => {
  console.log('Congratulations!');
}).catch((err) => {
  console.error(err);
});
