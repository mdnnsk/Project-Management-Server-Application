
// create function to randomly select first name and last name (check for duplicates?)

var generateName = function(){

  var employee = {};
  var skill = ["Front End", "Client Side", "Server Side"];
  var scrum = Math.floor((Math.random() * 9) + 1);

  var json = require('../students.json');

  var firstName = json.students[Math.floor(Math.random()*json.students.length)].first_name;

  var lastName = json.students[Math.floor(Math.random()*json.students.length)].last_name;


  //combine random first name with random last name
  employee.fullName  = firstName + " " + lastName;
  employee.skill = skill[ Math.floor(Math.random() * 3) ];
  employee.scrum = scrum;
  //if fullName already exists, run function again
  return employee;
};

module.exports = generateName;
