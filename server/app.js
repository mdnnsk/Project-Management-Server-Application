var express = require ('express');
var app = express();
var path = require('path');
var company_names = require('../modules/company_names.js');

var employee_name = require('../modules/randomNameModule.js');

var server = app.listen (8000, 'localhost', function(){
  var port = server.address().port;
  console.log( ' server is on ' + port);
});


app.get ( '/', function( req, res){
  res.sendFile (path.resolve ('./index.html'));
});

app.get( '/generateCompany', function(req, res) {
  res.send( company_names() );
  console.log("in server app.js company" + company_names() );
});

app.get( '/generateEmployee', function(req, res) {
  res.send( employee_name() );
  console.log("in server app.js employee" + employee_name() );
});

app.use(express.static('public'));
