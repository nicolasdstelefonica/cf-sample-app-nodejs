var express = require('express');

var PORT = 80;

var app = express();
app.get('/', function (req, res) {
  res.send('Welcome to Bluemix DevOps with Docker. Lets go use Pipeline Services. I am Nicolas from telefonica, nice to meet you!' );
});

app.listen(PORT)
console.log(' Application Running on port' + PORT);
