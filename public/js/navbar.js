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
	var l = url.length
	var slash = url.lastIndexOf('/')
	var n = buttonID.lastIndexOf('N');
	
	var lastZero = url.lastIndexOf(0);
	var site = url.substring(0, lastZero + 1);

	var next = $(this).closest(".navButton").attr('id').substring(0,n);
	var pageNum = site.length + next.length + 2;
	var current = url.substring(slash + 1);
	console.log(buttonID);
	console.log(current);
	console.log(slash);
	console.log(next);
	console.log(site);
	// $("#" + buttonID).();
	window.location.href =  site + "/"+ next + "/" + current;
	
}