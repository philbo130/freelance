 var app = angular.module('PearsonVegas', []);

 app.controller('AttendeesListController', ['$http', function($http){

 	this.attendees = []; //or can say "null"

 	var controller = this; //redefine what the controller is
	//'$http' to get the angular service. as soon as get instantiated, we get back below:

	$http.get('/attendees').then( //AJAX request
		//success
		function(response){
			controller.attendees = response.data;
			console.log(controller.attendees);
		}, 
		//error
		function(){
			console.log(err);
		}
	)
 }]);

 app.controller('CreateAttendeeController', ['$http', function($http){
 	this.create = function(){
 		console.log(this);
 	}

 }])
