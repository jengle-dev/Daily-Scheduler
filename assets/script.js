// working through TODOs in the order they appear on the screen and not the order they are presented in starter code

// Global variables
var today = dayjs();
var currentHour = dayjs().hour();
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

  $(".hour").each(compareTimeBlock);

  function compareTimeBlock(index, reviewTimeBlock) {
    // remove any preset class of past/present/future
    $(reviewTimeBlock).removeClass('past present future');

    if (parseInt($(this).attr('id') > currentHour)) {
      $(this).addClass('future');
    }
    else if (parseInt($(this).attr('id') === currentHour)) {
      $(this).addClass('present');
    }
    else {
      $(this).addClass('past');
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
    function saveTask(hour, task) {
      localStorage.setItem(hour, task);
    }
      $(".saveBtn").on("click", function () {
        userInput = $(this).siblings(".description").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".hour").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
      })
    }
  })