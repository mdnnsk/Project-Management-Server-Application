var frontEndCurrent = 0;
var clientSideCurrent = 0;
var serverSideCurrent = 0;

$(document).ready(function(){

  $('#createProject').click(function(){

    getCompany();

  });
});

function getCompany() {
  $.ajax({
    type: "GET",
    url:"/generateCompany",
    success: function(data){
      console.log( 'getCompany returning: ' + data);
      ajaxReady(data);
    }
  });

  console.log("Ajax fail");
}

function ajaxReady(projectName){
  var frontEnd = Math.floor(Math.random()*(60 - 10 + 1) + 10);
  var clientSide = Math.floor(Math.random()*(60 - 10 + 1) + 10);
  var serverSide = Math.floor(Math.random()*(60 - 10 + 1) + 10);

  //Display the
  $('#projectIn').append("<div><h2>" + projectName + "</h2><p id='frontEndP'>Front End: " + frontEnd + "</p><p id='clientSideP'>Client Side: " + clientSide + "</p><p id='serverSideP'>Server Side: " + serverSide + "</p><button id='deleteProject' class='btn btn-danger'>Delete Project</button><div id='employeeIn'><h2>Employees</h2></div></div>");
  openProject = true;
  $('#deleteProject').click(function(){
    $(this).parent().remove();
  });

  //Create the createEmployee button and add the event handler
  $('#employeeIn').append("<div class='col-md-6'><button type='button' id='createEmployee' class='btn btn-primary'>Assign Staff</button></div>");
  $('#createEmployee').click(function() {

    getEmployee();//Run Nick's Module
  });
};

function getEmployee() {
  $.ajax({
    type: "GET",
    url:"/generateEmployee",
    success: function(data){
      console.log( 'getEmployee returning: ' + data);
      ajaxReadyEmployee(data);
    }
  });

  console.log("Ajax fail");
}

function ajaxReadyEmployee(employeeObject){

  //Display the
  $('#employeeIn').append("<div class='employeeDiv'><h3>Name: " + employeeObject.fullName + "</h3><p>Skill: " + employeeObject.skill + "- " + employeeObject.scrum + "</p></div>");

  switch (employeeObject.skill) {
    case "Front End":
      frontEndCurrent -= employeeObject.skill;
      $('#frontEndP').innerHTML = "Front End: " + frontEndCurrent;
      break;
    case "Client Side":
      clientSideCurrent -= employeeObject.skill;
      $('#clientSideP').innerHTML = "Client Side: " + clientSideCurrent;
      break;
    case "Server Side":
      serverSideCurrent -= employeeObject.skill;
      $('#serverSideP').innerHTML = "Server Side: " + serverSideCurrent;
      break;
    default: alert("How did you even get this job?");

  }

};
