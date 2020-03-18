const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const dataJSON = [
  'List 1',
  'List 2',
  'List 3',
  'List 4',
  'List 5',
  'List 6'
]

let count = 1;

app.get('/json', function (req, res) {
  console.log(++count)
  res.json(dataJSON);
});

app.listen(5555, function () {
  console.log('Example app listening on port 3000!');
});