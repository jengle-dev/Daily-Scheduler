// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
dayjs().hour() // gets current hour
newHour = dayjs().hour(12);
dayjs().date()
currentDateEl = dayjs().date();
var containerEl = $('.container');
// var currentHourEl = moment().hour();
// moment().format("MMM Do YY")
var todayEl dayjs().toDate();

var currentWorkHour = [
  dayjs().format('dddd, MMMM D, YYYY'
  )
];

var timeBlock = $('col-1 hour');
var userInput = $('.textInput');

var reformatDate = thisInstance().format('MMMM D YYYY');
$('#currentDay').text(reformatDate);

   // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // gets current hour
  
  // ON CLICK - save
  // RETREIVE current timestamp
  // PARSE Hour
  
  // COMPARE Hour to option
    // IF "past" 
      // UPDATE CLASS - to "past"
    // IF "present"
      // UPDATE CLASS - to "present"
    // IF "future"
      // UPDATE CLASS - to "future"

  // SAVE to LOCAL STORAGE

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

