var chemistry = require('../data_chemistry.json');
var economics = require('../data_econ.json');
var english = require('../data_english.json');
var history = require('../data_history.json');
var math = require('../data_math.json');
var psychology = require('../data_psych.json');

exports.view = function(req, res){
  var lesson = req.params.id;
  if (lesson == "chemistry") {
		res.render('writing', chemistry); // http://localhost:3000/lesson/help
	} 
	else if (lesson == "economics") {
		res.render('writing', economics);
	}
	else if (lesson == "english") {
		res.render('writing', english);
	}
	else if (lesson == "history") {
		res.render('writing', history);
	}
	else if (lesson == "math") {
		res.render('writing', math);
	}
	else if (lesson == "psychology") {
		res.render('writing', psychology);
	}
};

