var mongoose = require('mongoose');



var applicantSchema = mongoose.Schema ({
	name : String,
	bio  : String,
	skills  : Array,
	years  : Number,
	why  : String
});


var applicants = mongoose.model('applicants', applicantSchema);

// var Laura = new Applicant({ 

// 	name : 'Laura',
// 	bio  : 'Previously worked as School Psychologist.',.
// 	job  : 'Looking for Web Developer job.',
// 	pay  : 120000  

// 	});

// var Jim = new Applicant({

// 	name : 'Jim',
// 	bio  : 'Previously worked as a mixologist.',
// 	job  : 'Looking for Music Producer job.',
// 	pay  : 200000  

// });

// var Steve = new Applicant({

// 	name : 'Steve',
// 	bio  : 'Previously worked as a Mushroom Farmer.',
// 	job  : 'Looking for Lead Guitarist job.',
// 	pay  : 10000  

// });

// var Katie = new Applicant({

// 	name : 'Katie',
// 	bio  : 'Previously worked as a Skateboarder.',
// 	job  : 'Looking for Overthinker job.',
// 	pay  : 100000000

// });


// Laura.save(function (err) {
//   	if (err)
//   		return console.log('Error!');
// });

// Jim.save(function (err) {
//   	if (err)
//   		return console.log('Error!');
// });

// Steve.save(function (err) {
//   	if (err)
//   		return console.log('Error!');
// });

// Katie.save(function (err) {
//   	if (err)
//   		return console.log('Error!');
// });


module.exports = applicants;
