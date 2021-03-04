// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage(){
	console.log("plz");
	$(".quizOption").click(buttonClick);
	
	$("#quizQuestion2").submit(questionCheck);

	}
	
function buttonClick(){
	
	var buttonID = $(this).closest(".quizOption").attr('id');
	console.log(buttonID);
	// $("#" + buttonID).();
	
}

function questionCheck(){
	var answer = $('#quizQuestion2').val();
	console.log(answer);
}