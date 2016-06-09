$(document).ready(function(){
  var openProject = false;

  $('#createProject').click(function(){
    // var scope =
    if (openProject == true) {
      alert("Please close your current project first.");
      return;
    }

    var projectName = "Test Project";

    var frontEnd = Math.floor(Math.random()*(60 - 10 + 1) + 10);
    var clientSide = Math.floor(Math.random()*(60 - 10 + 1) + 10);
    var serverSide = Math.floor(Math.random()*(60 - 10 + 1) + 10);
    // var requiredPoints = [frontEnd, clientSide, serverSide];
    $('#projectIn').append("<div><h2>" + projectName + "</h2><p>Front End: " + frontEnd + "</p><p>Client Side: " + clientSide + "</p><p>Server Side: " + serverSide + "</p><button id='deleteProject'>Delete Project</button></div>")
    openProject = true;
    $('#deleteProject').click(function(){
      $(this).parent().remove();
      openProject = false;

    });
  });

});
