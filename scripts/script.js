$(document).ready(function(){
  var openProject = false;

  $('#createProject').click(function(){
    // var scope =  It might be fun to have a scope variable that will scale these numbers to "small", "medium", and "large" projects
    if (openProject == true) {
      alert("Please close your current project first.");
      return;
    }

    var projectName = "Test Project"; //This needs to eventually needs to connect to Craig's module

    var frontEnd = Math.floor(Math.random()*(60 - 10 + 1) + 10);
    var clientSide = Math.floor(Math.random()*(60 - 10 + 1) + 10);
    var serverSide = Math.floor(Math.random()*(60 - 10 + 1) + 10);

    //Display the
    $('#projectIn').append("<div><h2>" + projectName + "</h2><p>Front End: " + frontEnd + "</p><p>Client Side: " + clientSide + "</p><p>Server Side: " + serverSide + "</p><button id='deleteProject' class='btn btn-danger'>Delete Project</button><div id='employeeIn'><h2>Employees</h2></div></div>")
    openProject = true;
    $('#deleteProject').click(function(){
      $(this).parent().remove();
      openProject = false;
    });

    //Create the createEmployee button and add the event handler
    $('#employeeIn').append("<div class="col-md-6"><button type="button" id="createEmployee" class="btn btn-primary">Assign Staff</button></div>")
    $('#createEmployee').click(function() {
      //Run Nick's Module
    });
  });

});
