$(document).ready(function() {
	
//////////////////////////////////////////
//			GLOBAL VARIABLES			//
//////////////////////////////////////////

	var title = document.getElementById("title");
	var quote = document.getElementById("quote");
	
	var parisradio = document.getElementById("parishilton");
	var georgeradio = document.getElementById("georgebush");
	var bartradio = document.getElementById("bartsimpson");

	var previous = document.getElementById("pervious");
	var next = document.getElementById("next");

	var correct = function(){
		$(title).text("You're Correct!");
	}
	var incorrect = function(){
		$(title).text("You're incorrect.");
	}

//////////////////////////////////////////
//				NEW GAME		 		//
//////////////////////////////////////////



//////////////////////////////////////////
//			QUESTION OBJECTS			//
//////////////////////////////////////////

	function question (questionNumber, correctPerson, quote) {
		this.questionNumber = questionNumber;
		this.correctPerson = correctPerson;
		this.quote = quote;
	}

	var questionOne = new question ("Question #1", "Bart Simpson", "Aren't we forgetting the true meaning of Christmas: the birth of Santa.");
	var questionTwo = new question ("Question #2", "George Bush", "I know how hard it is for you to put food on your family." );
	var questionThree = new question ("Question #3", "George Bush", "They misunderestimated me." );
	var questionFour = new question ("Question #4", "Paris Hilton", "I don't think there's ever been anyone like me that's lasted. And I'm going to keep lasting");

//////////////////////////////////////////
//			QUESTION DISPLAY			//
//////////////////////////////////////////

	function questionDisplay (question){
		$(title).text(this.questionNumber);
	}

	questionDisplay(questionFour);




$(parisradio).click(function(){
	correct();
});


});