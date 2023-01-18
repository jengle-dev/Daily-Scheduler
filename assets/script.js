// working through TODOs in the order they appear on the screen and not the order they are presented in starter code

// Global variables
var today = dayjs();
var currentHour = dayjs().hour(12);
// Array that lists all of the working hours for this current work day
var workDayHours = [
  dayjs().hour(9).format('hA'),
  dayjs().hour(10).format('hA'),
  dayjs().hour(11).format('hA'),
  dayjs().hour(12).format('hA'),
  dayjs().hour(13).format('hA'),
  dayjs().hour(14).format('hA'),
  dayjs().hour(15).format('hA'),
  dayjs().hour(16).format('hA'),
  dayjs().hour(17).format('hA')
];
//target the div with the hour
var timeBlockHour = $('col-md-1 hour')
//target the div with task info
var task = $('.description')
// end Global Variables

//wrapping function allows html page to load before running
$(function () {

  // Time
  $(function dateTime() {
    $('#currentDay').text(today.format('dddd MMM D, YYYY hh:mm'));
    console.log(today);
  });

  //parse current hour & compare
  console.log(currentHour);

  function compareTimeBlock(reviewTimeBlock) {
    var currentTimeHour = dayjs($(timeBlockHour).text().trim(), 'hA').hour();

    // remove any preset class of past/present/future
    $(reviewTimeBlock).removeClass('past present future');

    if (currentTimeBlock > currentHour) {
      $(reviewTimeBlock).addClass('future');
    }
    else if (currentTimeBlock === currentHour) {
      $(reviewTimeBlock).addClass('present');
    }
    else {
      $(reviewTimeBlock).addClass('past');
    }
  }

  function textDescription() {
    // Loop index of array of workDayHours
    for (var i = 0; i < workDayHours.length; i++) {
      let task = localStorage.getItem(workDayHours[i]);

      //starting +9 because starting hour is 9AM and index of array begin with 0
      if (task) {
        $('#' + (i + 9)).siblings().first().children().text(task);
      }
  }


  //save to local storage upon click
  function saveDescription(hour, task) {
    localStorage.setItem(hour,task);
  }

  for (var i = 0; i < workDayHours.length; i++) {
   var userInput = $('<p>').text(' ').attr({id:'hour-' + (i+9)});

  });