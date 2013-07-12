var express = require('express');

var app = express.createServer(express.logger());

var strhi = ''
fs.readFileSync('./index.html', function(err, data) {
    if(err) throw err;
    strhi = data.toString()
}
app.get('/', function(request, response) {
  response.send('Hello World from ' + strhi);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});