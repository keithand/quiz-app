$(document).ready(function() {
	
	// SET THE QUESTION DATA VARIABLE

	var question = [{
		num: "Question #1",
		quote : "Aren't we forgetting the true meaning of Christmas: the birth of Santa.",
		person : "Bart Simpson"
		},
		{
		num: "Question #2",
		quote : "I know how hard it is for you to put food on your family.",
		person: "George Bush"
		},
		{
		num: "Question #3",
		quote: "They misunderestimated me.",
		person : "George Bush"
		},
		{
		num: "Question #4",
		quote: "I don't think there's ever been anyone like me that's lasted. And I'm going to keep lasting.",
		person : "Paris Hilton"
		}
	];

	// AND START QUESTION DISPLAY AND ANSWER

	var newGame = function  (event){
		alert("Are you ready to begin?");
	}


	var questionOne = function (event){

		$("#title").text(question[0].num);
		$("#quote q").text(question[0].quote);
		$("#bartradio").on('click', function(event){
			alert("Correct!");
			return true
		});
		$("#parisradio, #georgeradio").on("click", function(event){
			alert("Incorrect.");
		return true
		});
	};

	var questionTwo = function (){

	$("#title").text(question[1].num);
	$("#quote q").text(question[1].quote);
	$("#bartradio").on('click', function(event){
		alert("Correct!");
		return true
	});
	$("#parisradio, #georgeradio").on("click", function(event){
		alert("Incorrect.");
		return true
	});
}

	var questionThree = function (){

	$("#title").text(question[2].num);
	$("#quote q").text(question[2].quote);
	$("#georgeradio").on('click', function(event){
		alert("Correct!");
		return true
	});
	$("#parisradio, #bartradio").on("click", function(event){
		alert("Incorrect.");
		return true
	});
}
	function questionSeries () {
		questionOne();
		if(questionOne === true){
		questionTwo()
	}; if (questionTwo === true) {
		questionThree()
	}

}

questionSeries();

});