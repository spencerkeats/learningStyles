
/*
 * GET home page.
 */
var chemistry = require('../data_chemistry.json');
var economics = require('../data_econ.json');
var english = require('../data_english.json');
var history = require('../data_history.json');
var math = require('../data_math.json');
var psychology = require('../data_psych.json');

exports.view = function(req, res){
  var lesson = req.params.id;
	if (lesson == "chemistry") {
		res.render('reading', chemistry); // http://localhost:3000/lesson/help
	} 
	else if (lesson == "economics") {
		res.render('reading', economics);
	}
	else if (lesson == "english") {
		res.render('reading', english);
	}
	else if (lesson == "history") {
		res.render('reading', history);
	}
	else if (lesson == "math") {
		res.render('reading', math);
	}
	else if (lesson == "psychology") {
		res.render('reading', psychology);
	}
};

