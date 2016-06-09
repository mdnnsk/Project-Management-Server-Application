
// create function to randomly select first name and last name (check for duplicates?)

var generateName = function(){

  var fullName;

  var json = require('../students.json');

  var firstName = json.students[Math.floor(Math.random()*json.students.length)].first_name;

  var lastName = json.students[Math.floor(Math.random()*json.students.length)].last_name;


  //combine random first name with random last name
  fullName = firstName + " " + lastName;

  //if fullName already exists, run function again
  return fullName;
};

module.exports = generateName;
