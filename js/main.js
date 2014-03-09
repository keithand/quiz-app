$(document).ready(function() {
	
	//SET VARIABLES TO COUNT ANSWERS

	var questionsAnswered = 0;
	var guessCount = 0;
	var result;
	var qnum = 0;


	var paris = $("#parisradio").checked;
	var george = $("#georgeradio").checked;
	var bart = $("#bartradio").checked;

	function clicked(){
		if(bart === true || paris === true || george === true){
			$(this).addClass('selected');
		} if (bart === false || paris === false || george === false){
			$(this).removeClass('selected');
		}
	};


	// SET THE QUESTION DATA VARIABLE

	var question = [
		{
		num: 1,
		quote : "Aren't we forgetting the true meaning of Christmas: the birth of Santa.",
		ans : bart
		},
		{
		num: 2,
		quote : "I know how hard it is for you to put food on your family.",
		ans: george
		},
		{
		num: 3,
		quote: "They misunderestimated me.",
		ans : george
		},
		{
		num: 4,
		quote: "I don't think there's ever been anyone like me that's lasted. And I'm going to keep lasting.",
		ans : paris
		}
	];

	// AND START QUESTION DISPLAY AND ANSWER

	var quiz = function (){
				
			var reset = function(){
				qnum = 0;
				nextQuestion();
			};

			var nextQuestion = function (){
				$("#title").text("This is question " + question[qnum].num);
				$("#quote q").text(question[qnum].quote);

				if(nextQuestion >= 0) {
					$("#title").text("Question #" + question[0].num);
					$("#quote q").text(question[0].quote);
					if (question[qnum].ans === true){
						alert("good job!");
					} else {
						alert("You're wrong!");
					}
				qnum++;

				}
			reset();

			};

	};

quiz();


});