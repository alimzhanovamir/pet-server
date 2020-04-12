const express = require('express');
const app = express();
// const cors = require('cors');
// app.use(cors());
const PORT = process.env.PORT || 80;

const base = {
  navList: [
    'Торты',
    'Десерты',
    'Веган',
    'Контакты'
  ]
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

app.listen(PORT, function () {
  console.log('Server has been started...');
});
