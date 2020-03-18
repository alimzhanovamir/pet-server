const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const base = {
  navList: [
    'Торты',
    'Десерты',
    'Веган',
    'Контакты'
  ]
}

app.get('/', function (req, res) {
  res.json(base);
});

app.listen(5555, function () {
  console.log('Example app listening on port 5555!');
});