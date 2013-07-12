var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var fs = require('fs');
  var strhi = '';
  fs.readFileSync('index.html',"utf-8", function(err, data) {
    if(err) throw err;
    strhi = data.toString();
  });
  response.send(strhi);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
