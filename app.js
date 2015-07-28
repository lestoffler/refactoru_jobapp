var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Applicants = require('./models/job-app.js');
mongoose.connect('mongodb://localhost/job-app');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	Applicants.find({}, function(err, doc){ 
	res.render('applicants', {app : doc})
	})
});

app.get('/success', function(req, res){
	res.render('success')
});

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	var applicant = {
		name : req.body.name,
		bio  : req.body.bio,
		skills  : req.body.skills.split(','),
		years  : req.body.years,
		why  : req.body.why
	}
	var newApplicant = new Applicants(applicant)

	newApplicant.save(function(err, doc){
	res.redirect('/applicants');
	 });
});

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
