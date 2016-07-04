var express        = require('express'),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    port           = 3000 || process.env.PORT,
    app            = express();

mongoose.connect('mongodb://localhost:27017/pearson_vegas');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

var attendeesController = require('./controllers/attendeesController.js');
app.use('/attendees', attendeesController);

mongoose.connection.once('open', function(){
app.listen(port, function() {
    console.log('Running on port ' + port);
    })
});
