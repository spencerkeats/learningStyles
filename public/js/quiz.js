// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage(){
	console.log("plz");
	$(".quizOption").click(buttonClick);
	}
	
function buttonClick(){
	
	var buttonID = $(this).closest(".quizOption").attr('id');
	console.log(buttonID);
	// $("#" + buttonID).();
	
}