var data = require("../data_classes.json");

exports.addUser = function(request, response) {    
	// Your code goes here
	var newEmail = request.query.email;
	var newPassword = request.query.password;
	{
		newUser = {
			"email": newEmail,
			"password": newPassword,
		}
		
	}
	console.log(newEmail);
	console.log(newPassword);
	data.users.push(newUser);
	response.render("index", data);
 }