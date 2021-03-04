
/*
 * GET home page.
 */
var stuff = require('../data_classes.json');


exports.view = function(req, res){
  res.render('index', stuff);

};
