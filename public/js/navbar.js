// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage(){
	console.log("plz");
	$(".navButton").click(buttonClick);

	}
	

function buttonClick(){
	
	var buttonID = $(this).closest(".navButton").attr('id');
	var url = window.location.href;
	var current = url.substring(30);
	var n = buttonID.lastIndexOf('N');
	var next = $(this).closest(".navButton").attr('id').substring(0,n);


	console.log(buttonID);
	console.log(current);
	console.log(n);
	console.log(next);
	// $("#" + buttonID).();
	window.location.href = url.substring(0,22) + next + "/" + current;
	
}