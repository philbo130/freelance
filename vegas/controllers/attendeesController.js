var express = require('express'),
    router  = express.Router(),
	Attendee = require('../models/attendees.js');

//get all attendees
router.get('/', function(req, res){	
	Attendee.find({}, function(err, attendees){ //to get all attendees
		res.json(attendees); // to send out attendees
	});
});

module.exports = router;