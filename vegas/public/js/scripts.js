console.log("pearson goes vegas");
$(document).ready(function() {

//////////////Countdown Timer///////////////

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

////////////Map and Map Markers///////////////

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 36.1212, lng: -115.1697}
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var locations = [
  ['Bellagio', 36.114, -115.172751, 4],
  ['e by Jose Andreas', 36.1097544, -115.17387259999998, 3],
  ['XS', 36.1265953, -115.1653652, 2],
  ['Venetian Sports Book', 36.124302, -115.168613, 1],
];

function setMarkers(map) {
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      map: map,
      shape: shape,
      icon: '/img/hopmarker.png',
      title: location[0],
      zIndex: location[3],
    });
  }
}






