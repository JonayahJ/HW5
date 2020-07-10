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
$(document).ready(function(){


// VARIABLES
const date = moment();
    console.log(date.format("dddd\, MMMM Do\, YYYY")); 
    // off by 2 days???

var timeBlock = $(".time-block");
var hourEl = $(".hour");
var pastEl = $(".past");
var presentEl = $(".present");
var futureEl = $(".future");

var saveBtn = $(".saveBtn");

var time = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

console.log(time);

// PLANNER - show date and time
function displayDate() {
    var currentDay = document.getElementById("current-day");
    currentDay.innerHTML = date.format("dddd\, MMMM Do");
}

displayDate();

// TIMEBLOCKS AND BUSINESS HOURS
    // SHOW HOURS (9-5) 
    // how to add 8 rows and 3 columns   
    // col 1. time with text moved to the side and borders added, attribute added to target
    // col 2. text box, which needs attribute to help differentiate it
    // col 3. save box, which will locally save whats in the box, needs atrributes aswell


    // COLOR CODING FOR THE TIME OF DAY
    // if past, color grey
    // if present, color red
    // if future, color green


    // INPUT FIELD FOR TIMEBLOCK


// SAVE BUTTON AND LOCAL STORAGE


    // SAVES DESPITE REFRESH
});