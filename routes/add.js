var data = require("../data_classes.json");

exports.addUser = function(request, response) {    
	// Your code goes here
	var newEmail = request.body.inEmail;
	var newPassword = request.query.password;
	{
		newUser = {
			"email": newEmail,
			"password": newPassword,
		}
		
	}
	

	data.users.push(newUser);
	response.render("index", data);
	console.log(newEmail);
	console.log(data);
	//console.log(newPassword);
 }