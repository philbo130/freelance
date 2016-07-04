console.log("pearson goes vegas");
$(document).ready(function() {

/* jQuery grabber variables */
var $days = $('#days');
var $hours = $('#hours');
var $minutes = $('#minutes');
var $seconds = $('#seconds');

/* Variables */
var deadline = 'October 7 2016 23:59:59 GMT+0200';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(){
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(deadline);
    $days.text(t.days);
    $hours.text(t.hours);
   	$minutes.text(t.minutes);
   	$seconds.text(t.seconds)
  },1000);
}

initializeClock(deadline);

}); //<--closes out the document ready jQuery
