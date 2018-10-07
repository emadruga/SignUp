var connect = require('connect'),
serveStatic = require('serve-static');

var app = connect();
var serverPort = process.env.PORT || 5000;

app.use(serveStatic("www"))
app.listen(serverPort);
console.log("Listening on port " + serverPort);
