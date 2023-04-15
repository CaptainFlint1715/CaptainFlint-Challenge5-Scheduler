// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// calls dayjs to display current date
var currentDate = dayjs().format('dddd, MMMM D')
$('#currentDay').html(currentDate)

$('document').ready(function() {
    // sets click listener to saveBtn  
    $('.saveBtn').on('click', function(){
        var event = $(this).siblings('textarea').val()
        var time = $(this).parent().attr('id')
        // save event text by hour(time=key)
        localStorage.setItem(time, event)
      })

    function findTime () {
      var currentTime = dayjs().hour()
        // sets color of each tab according to current time
      $('.time-block').each(function() {
        // variable taking the pure number from the current hour
        var blockHour = parseInt($(this).attr('id').split('hour-')[1])
        if(blockHour < currentTime) {
          $(this).removeClass('future')
          $(this).removeClass('present')
          $(this).addClass('past')
        } else if (blockHour === currentTime) {
          $(this).removeClass('future')
          $(this).removeClass('past')
          $(this).addClass('present')
        } else {
          $(this).removeClass('present')
          $(this).removeClass('past')
          $(this).addClass('future')
        }
      })
    }
    // retrieves saved event text and sets to page
    $('#hour-9 textarea').val(localStorage.getItem('hour-9'))
    $('#hour-10 textarea').val(localStorage.getItem('hour-10'))
    $('#hour-11 textarea').val(localStorage.getItem('hour-11'))
    $('#hour-12 textarea').val(localStorage.getItem('hour-12'))
    $('#hour-13 textarea').val(localStorage.getItem('hour-13'))
    $('#hour-14 textarea').val(localStorage.getItem('hour-14'))
    $('#hour-15 textarea').val(localStorage.getItem('hour-15'))
    $('#hour-16 textarea').val(localStorage.getItem('hour-16'))
    $('#hour-17 textarea').val(localStorage.getItem('hour-17'))

    findTime()
  })


