const express = require('express');
const fs = require('fs');
const app = express();
const gamesJSON = fs.readFileSync('./json/games.json');
const cors = require('cors');
// app.use(cors());

const PORT = process.env.PORT || 80;
const whitelist = [
  'https://alimzhanovamir.github.io/egamings-test-react/',
  'http://localhost:3000/egamings-test-react'
];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}


app.get('/', function (req, res) {
  res.end(`
    <h1>Test Server</h1>
    <nav>
      <ul>
        <li><a href="/">Go home page</a></li>
        <li><a href="/about">Go about page</a></li>
      </ul>
    </nav>
  `);
});

app.get('/about', function (req, res) {
  res.end(`
    <h1>About</h1>
    <nav>
      <ul>
        <li><a href="/">Go home page</a></li>
        <li><a href="/about">Go about page</a></li>
      </ul>
    </nav>  
  `);
});

app.get('/games', cors(corsOptionsDelegate),function (req, res) {
  res.json(gamesJSON);
});

app.listen(PORT, function () {
  console.log('Server has been started...');
});
