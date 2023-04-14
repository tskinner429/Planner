// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  //listen for save button clicks
  $('.saveBtn').on('click',function(){
    //get nearby values
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem("text-9", userInput);
    localStorage.getItem("text-9");
    sessionStorage.setItem("text-9", userInput);
    sessionStorage.getItem("text-9");
  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?\
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var saveBtn = $('.saveBtn');
  var hour9Input = $('#hour-9 .description');
  var hour10Input = $('#hour-10 .description');
  var hour11Input = $('#hour-10 .description');
  var hour12Input = $('#hour-11 .description');
  var hour12Input = $('#hour-12 .description');
  var hour1Input = $('#hour-1 .description');
  var hour2Input = $('#hour-2 .description');
  var hour3Input = $('#hour-3 .description');
  var hour4Input = $('#hour-4 .description');
  var hour5Input = $('#hour-5 .description');
  var hour6Input = $('#hour-6 .description');

  saveBtn.on('click', updateInputarea)
  function updateInputarea() {
    localStorage.setItem('hour9content', hour9Input.val())
    localStorage.setItem('hour10content', hour10Input.val())
    localStorage.setItem('hour11content', hour11Input.val())
    localStorage.setItem('hour12content', hour12Input.val())
    localStorage.setItem('hour1content', hour1Input.val())
    localStorage.setItem('hour2content', hour2Input.val())
    localStorage.setItem('hour3content', hour3Input.val())
    localStorage.setItem('hour4content', hour4Input.val())
    localStorage.setItem('hour5content', hour5Input.val())
    localStorage.setItem('hour6content', hour6Input.val())
  }

  //Get local users saved into timeblock
 hour9Input.text(localStorage.getItem('hour9content'));
 hour10Input.text(localStorage.getItem('hour10content'));
 hour11Input.text(localStorage.getItem('hour11content'));
 hour12Input.text(localStorage.getItem('hour12content'));
 hour1Input.text(localStorage.getItem('hour1content'));
 hour2Input.text(localStorage.getItem('hour2content'));
 hour3Input.text(localStorage.getItem('hour3content'));
 hour4Input.text(localStorage.getItem('hour4content'));
 hour5Input.text(localStorage.getItem('hour5content'));
 hour6Input.text(localStorage.getItem('hour6content'));


});

var timeBlocks = [
  {
    divID: "hour-9",
    textID: "text-9",
    hour: 9
  },
  {
    divID: "hour-10",
    textID: "text-10",
    hour: 10
  },
  {
    divID: "hour-11",
    textID: "text-11",
    hour: 11
  },
  {
    divID: "hour-12",
    textID: "text-12",
    hour: 12
  },
  {
    divID: "hour-1",
    textID: "text-1",
    hour: 1
  },
  {
    divID: "hour-2",
    textID: "text-2",
    hour: 2
  },
  {
    divID: "hour-3",
    textID: "text-3",
    hour: 3
  },
  {
    divID: "hour-4",
    textID: "text-4",
    hour: 4
  },
  {
    divID: "hour-5",
    textID: "text-5",
    hour: 5
  },
  {
    divID: "hour-6",
    textID: "text-6",
    hour: 6
  },
  
  
]


function setTimeBlockClass() {
  for (let i = 0; i < timeBlocks.length; i++) {
    const timeblock = timeBlocks[i];
    //use day.js to determine the current hour and compare it to timeblock.hour to determine class

    //update timeblock div to use that class
  //$(`#${timeblock.divID`}`).addClass("past")
  }
}

function setTimeBlockText() {
  for (let i = 0; i < timeBlocks.length; i++) {
    const timeblock = timeBlocks[i];

    const task = localStorage.getItem(timeblock.textID) || "";

    $(`#${timeblock.textID}`).val(task);

  }
}

function saveTask() {
  const textAreaID = $(this).data("textarea")

  const task = $(`#${textAreaID}`).val();

  localStorage.setItem(textAreaID, JSON.stringify(task));
}

$(".saveBtn").click(saveTask);

var dateEl = $('#currentDay')
var today = dayjs();
dateEl.text(today.format('dddd, MMMM D'));

var currentHour =dayjs().format('HH');
var hour9 = $('#hour-9');

if (currentHour == 9) {
  hour9.removeClass('past')
  hour9.removeClass('future')
  hour9.addClass('present')
} else if(currentHour > 9) {
  hour9.removeClass('present')
  hour9.removeClass('future')
  hour9.addClass('past')
} else if (currentHour < 9) {
  hour9.removeClass('past')
  hour9.removeClass('present')
  hour9.addClass('future')
}

var currentHour =dayjs().format('HH');
var hour9 = $('#hour-9')

if (currentHour == 9) {
  hour9.removeClass('past')
  hour9.removeClass('future')
  hour9.addClass('present')
} else if(currentHour > 9) {
  hour9.removeClass('present')
  hour9.removeClass('future')
  hour9.addClass('past')
} else if (currentHour < 9) {
  hour9.removeClass('past')
  hour9.removeClass('present')
  hour9.addClass('future')
}



var currentHour =dayjs().format('HH');
var hour10 = $('#hour-10')

if (currentHour == 10) {
  hour10.removeClass('past')
  hour10.removeClass('future')
  hour10.addClass('present')
} else if(currentHour > 10) {
  hour10.removeClass('present')
  hour10.removeClass('future')
  hour10.addClass('past')
} else if (currentHour < 10) {
  hour10.removeClass('past')
  hour10.removeClass('present')
  hour10.addClass('future')
}

var hour11 = $('#hour-11')

if (currentHour == 11) {
  hour11.removeClass('past')
  hour11.removeClass('future')
  hour11.addClass('present')
} else if(currentHour > 11) {
  hour11.removeClass('present')
  hour11.removeClass('future')
  hour11.addClass('past')
} else if (currentHour < 11) {
  hour11.removeClass('past')
  hour11.removeClass('present')
  hour11.addClass('future')
}


var hour12 = $('#hour-12')

if (currentHour == 12) {
  hour12.removeClass('past')
  hour12.removeClass('future')
  hour12.addClass('present')
} else if(currentHour > 12) {
  hour12.removeClass('present')
  hour12.removeClass('future')
  hour12.addClass('past')
} else if (currentHour < 12) {
  hour12.removeClass('past')
  hour12.removeClass('present')
  hour12.addClass('future')
}

var hour1 = $('#hour-1')

if (currentHour == 1) {
  hour1.removeClass('past')
  hour1.removeClass('future')
  hour1.addClass('present')
} else if(currentHour > 1) {
  hour1.removeClass('present')
  hour1.removeClass('future')
  hour1.addClass('past')
} else if (currentHour < 1) {
  hour1.removeClass('past')
  hour1.removeClass('present')
  hour1.addClass('future')
}


var hour2 = $('#hour-2')

if (currentHour == 2) {
  hour2.removeClass('past')
  hour2.removeClass('future')
  hour2.addClass('present')
} else if(currentHour > 2) {
  hour2.removeClass('present')
  hour2.removeClass('future')
  hour2.addClass('past')
} else if (currentHour <2) {
  hour2.removeClass('past')
  hour2.removeClass('present')
  hour2.addClass('future')
}


var hour3 = $('#hour-3')

if (currentHour == 3) {
  hour3.removeClass('past')
  hour3.removeClass('future')
  hour3.addClass('present')
} else if(currentHour > 3) {
  hour3.removeClass('present')
  hour3.removeClass('future')
  hour3.addClass('past')
} else if (currentHour < 3) {
  hour3.removeClass('past')
  hour3.removeClass('present')
  hour3.addClass('future')
}


var hour4 = $('#hour-4')

if (currentHour == 4) {
  hour4.removeClass('past')
  hour4.removeClass('future')
  hour4.addClass('present')
} else if(currentHour > 4) {
  hour4.removeClass('present')
  hour4.removeClass('future')
  hour4.addClass('past')
} else if (currentHour < 4) {
  hour4.removeClass('past')
  hour4.removeClass('present')
  hour4.addClass('future')
}

var hour5 = $('#hour-5')

if (currentHour == 5) {
  hour5.removeClass('past')
  hour5.removeClass('future')
  hour5.addClass('present')
} else if(currentHour > 5) {
  hour5.removeClass('present')
  hour5.removeClass('future')
  hour5.addClass('past')
} else if (currentHour < 5) {
  hour5.removeClass('past')
  hour5.removeClass('present')
  hour5.addClass('future')
}

var hour6 = $('#hour-6')

if (currentHour == 6) {
  hour6.removeClass('past')
  hour6.removeClass('future')
  hour6.addClass('present')
} else if(currentHour > 6) {
  hour6.removeClass('present')
  hour6.removeClass('future')
  hour6.addClass('past')
} else if (currentHour < 6) {
  hour6.removeClass('past')
  hour6.removeClass('present')
  hour6.addClass('future')
}

