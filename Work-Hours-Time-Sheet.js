//Get the time difference in minutes between two times.
function timeDifference(startTime, endTime) {

  //remove the colons
  startTime = startTime.split(":");
  endTime = endTime.split(":");

  //calculate the time elapsed in miliseconds
  var startDate = new Date(0, 0, 0, parseInt(startTime[0]), parseInt(startTime[1]));
  var endDate = new Date(0, 0, 0, parseInt(endTime[0]), parseInt(endTime[1]));
  var differenceinmiliseconds = endDate.getTime() - startDate.getTime();

  //calculate the time elapsed in minutes
  var differenceinminutes = Math.floor(differenceinmiliseconds / 60000);

  return differenceinminutes;
}

//Calculate and display the total amount of time worked.
function totalTime() {

  //get the user inputs from the table
  var startTimes = document.getElementsByName("starttime");
  var endTimes = document.getElementsByName("endtime");
  var totalTimeMinutes = 0;

  //calculate the total time worked in minutes
  for (let x = 0; x < startTimes.length; x++) {
    if (isNaN(parseInt(startTimes[x].value)) || isNaN(parseInt(endTimes[x].value))) {
      continue;
    } else {
      totalTimeMinutes += timeDifference(startTimes[x].value, endTimes[x].value);
    }
  }

  //display and format the total time worked in hours   
  console.log(totalTimeMinutes);
  var hours = Math.floor(totalTimeMinutes / 60);
  console.log(hours);
  var hoursTick = hours + (hours == 1 ? " hour" : " hours");
  console.log(hoursTick);

  //display and format the total time worked in minutes
  totalTimeMinutes -= hours * 60;
  var minutes = totalTimeMinutes;
  console.log(minutes);
  var minutesTick = "";
  console.log(minutesTick);
  if (minutes == 1) {
    minutesTick = " and " + minutes + " minute";
  } else {
    minutesTick = " and " + minutes + " minutes";
  }

  document.getElementById("totaltime").value = hoursTick + minutesTick;
}

//Add a new user input row to the table.
function addRow() {
  const table = document.getElementById("userinputtable");
  const rowToCopy = document.getElementById("removableuserinputrow");
  var newRow = rowToCopy.cloneNode(true);
  newRow.id = "clone";
  newRow.style.visibility = "visible";
  table.append(newRow);
}

//Clear all user inputs from the table.
function clearInputs() {
  var inputFieldsList = document.getElementsByClassName("inputfield");
  for (let x = 0; x < inputFieldsList.length; x++) {
    inputFieldsList[x].value = null;
  }
}

//Remove a user input row in the table.
function removeRow(row) {
  var closeButtonsList = document.getElementsByName("closebutton");
  for (let x = 0; x < closeButtonsList.length; x++) {
    closeButtonsList[x].addEventListener("click", function() {
      this.parentElement.parentElement.style.display = "none";
    })
  }
}
