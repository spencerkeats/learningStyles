
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage(){
	console.log("plzNav");
	$(".navButton").click(navButtonClick);
	$(".quizOption").click(quizButtonClick);
	
	$("#quizQuestion2").submit(questionCheck);

	}
	

function navButtonClick(){
	
	var buttonID = $(this).closest(".navButton").attr('id');
	var url = window.location.href;
	var l = url.length
	var slash = url.lastIndexOf('/')
	var n = buttonID.lastIndexOf('N');
	
	var lastZero = url.lastIndexOf(0);
	var site = url.substring(0, lastZero + 1);

	var next = $(this).closest(".navButton").attr('id').substring(0,n);
	var pageNum = site.length + next.length + 2;
	var current = url.substring(slash + 1);
	//console.log(buttonID);
	//console.log(current);
	//console.log(slash);
	//console.log(next);
	//console.log(site);
	// $("#" + buttonID).();
	window.location.href =  site + "/"+ next + "/" + current;
	
}
	
function quizButtonClick(){
	
	var buttonID = $(this).closest(".quizOption").attr('id');
	console.log(buttonID);
	var choice = buttonID.substring(buttonID.length-1).trim();
	console.log(choice);
	var currQ = buttonID.charAt(1).trim();
	var currA = $("#q" + currQ + "Answer").text().trim();
	console.log(currA);

	if(choice == currA){
		console.log("correct");
		alert("Correct!");

	}
	else{
		console.log("incorrect");
		alert("Incorrect!");
		
	}
	
}

function questionCheck(){
	var answer = $('#quizQuestion2').val();
	console.log(answer);
}
