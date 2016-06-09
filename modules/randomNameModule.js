
// create function to randomly select first name and last name (check for duplicates?)

var generateName = function(){

  var fullName;

  var json = JSON.parse());

  var firstName = json.students.first_name[Math.floor(Math.random()*json.students.length)];

  var lastName = json.students.last_name[Math.floor(Math.random()*json.students.length)];


  //combine random first name with random last name
  fullName = firstName + lastName;

  //if fullName already exists, run function again
  return fullName;
};

module.exports = generateName;

//module for json eparser
