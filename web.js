var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = fs.readFileSync('index.html',"utf-8");
  var  strhi = buffer.toString();
  response.send(strhi);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
