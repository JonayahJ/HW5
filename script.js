// REQUIREMENTS ===============================================================================================

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

//  CODE ======================================================================================================

// VARIABLES
// const currentDay = $("current-day");
const date = moment();
    console.log(date.format("dddd\, MMMM Mo\, YYYY")); 
    // off by 2 days???

// const time 

var timeBlock = $("time-block");
var hourEl = $("hour");
var pastEl = $("past");
var presentEl = $("present");
var futureEl = $("future");

var saveBtn = $("saveBtn");


// PLANNER - show date and time
function displayDate() {
    var currentDay = document.getElementById("current-day")
    currentDay.innerHTML = date.format("dddd\, MMMM Mo");
    // currentDay.innerHTML = Date();
}

displayDate();

// TIMEBLOCKS AND BUSINESS HOURS
    // SHOW HOURS (9-5)    
    

    // COLOR CODING FOR THE TIME OF DAY


    // INPUT FIELD FOR TIMEBLOCK


// SAVE BUTTON AND LOCAL STORAGE


    // SAVES DESPITE REFRESH