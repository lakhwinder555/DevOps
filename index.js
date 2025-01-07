var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Use the port provided by Azure, or fallback to 5000 for local development
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
