$(document).ready(function() {
	
	// Expexted App Flow :


//---------GLOBAL VARIABLES

var complete = false; // will become true after quiz is completed
var score = 0;
var response; // the users answer
var qnum = 0; // keeps track of what question number the user is on
var result; //the value if the user answered correctly
var answered; //stores the value of whether the user has already answered the question

var correctAnswer = 0;
var wrongAnswer = 0;

var question = [
		{
		num: 1,
		quote : "Aren't we forgetting the true meaning of Christmas: the birth of Santa.",
		ans : 'Bart Simpson',
		correct: 2
		},
		{
		num: 2,
		quote : "I know how hard it is for you to put food on your family.",
		ans: 'George Bush',
		correct: 1
		},
		{
		num: 3,
		quote: "They misunderestimated me.",
		ans : 'George Bush',
		correct: 1
		},
		{
		num: 4,
		quote: "I don't think there's ever been anyone like me that's lasted. And I'm going to keep lasting.",
		ans : 'Paris Hilton',
		correct: 0
		}
	];

	//DISPLAY CURRENT QUESTION//
	 displayCurrentQuestion = function (qnum, question){
		var currentQuestionData = question[qnum];
		var userAnswer = $("input[type='radio']:checked").index("input[type='radio']");
		$('#quest_num').text(currentQuestionData.num);
		$('#quote q').text(currentQuestionData.quote);
	};

		var currentQuestionData = question[qnum];
		var userAnswer = $("input[type='radio']:checked").index("input[type='radio']");
		
		//EVENT HANDLER FOR SUBMIT BUTTON
		$('#submit').on('click', function(qnum, question){ 
		
				if ( userAnswer == currentQuestionData.correct){
					alert("Good job!");
					correctAnswer++;
					$("#correct").text(correctAnswer);
				} else {
					alert("Youre wrong.");
					wrongAnswer++;
					$("#incorrect").text(wrongAnswer);
				}
			qnum++;
			displayCurrentQuestion(qnum, question);

		});


});