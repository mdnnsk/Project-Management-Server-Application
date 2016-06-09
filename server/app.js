var express = require ('express');
var app = express();

var server = app.listen (8080, 'localhost', function(){
  var port = server.address().port;
  console.log( ' server is on ' + port);
});

var randomNameModule = require('../modules/randomNameModule.js');


app.get ( '/', function( req, res){
  res.write("Name " + randomNameModule());
  res.end();
});
