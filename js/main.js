$(document).ready(function() {
	
	// Expexted App Flow :


//---------GLOBAL VARIABLES

var complete = false; // will become true after quiz is completed
var score = 0;
var response; // the users answer
var qnum = 0; // keeps track of what question number the user is on
var result; //the value if the user answered correctly
var answered = 0; //stores the value of whether the user has already answered the question

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
		},
		{
		num: 5,
		quote: "I get half a million just to show up at parties. My life is, like, really, really fun!",
		ans: 'Paris Hilton',
		correct: 0
		}
	];

	var currentQuestionData = question[qnum];
	var userAnswer = $("input[type='radio']:checked").index("input[type='radio']");

	//DISPLAY CURRENT QUESTION//
	 displayCurrentQuestion = function (){
		var userAnswer = $("input[type='radio']:checked").index("input[type='radio']");
		currentQuestionData = question[qnum];
		$('#quest_num').text(currentQuestionData.num);
		$('#quote q').text(currentQuestionData.quote);
	};

		
		//EVENT HANDLER FOR SUBMIT BUTTON
		$('#submit').on('click', function(){ 
		userAnswer = $("input[type='radio']:checked").index("input[type='radio']");
				
				 if ( userAnswer == currentQuestionData.correct){
					$("#response h2").text("Correct!");
					$("#response p").text("");

					correctAnswer++;
					answered++;
				
					$("#correct").text(correctAnswer);
					$("#answered").text(answered);

				} else {
					$("#response h2").text("Incorrect.");
					$("#response p").text("The correct answer for question #" + (answered + 1) + " was " + question[qnum].ans + ".");					
				
					wrongAnswer++;
					answered++;
				
					$("#incorrect").text(wrongAnswer);
					$("#answered").text(answered);
				}
			qnum++;
			displayCurrentQuestion(qnum, question);


		});
});