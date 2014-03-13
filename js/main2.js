$(document).ready(function() {

//---------FUNCTIONS AND VARIABLES

var complete = false; // will become true after quiz is completed
var score = 0;
var response; // the users answer
var qnum = 0; // keeps track of what question number the user is on
var result; //the value if the user answered correctly

var correctAnswer = 0;
var wrongAnswer = 0;

var question = [
		{
		quote : "Aren't we forgetting the true meaning of Christmas: the birth of Santa.",
		ans : 'Bart Simpson'
		},
		{
		quote : "I know how hard it is for you to put food on your family.",
		ans: 'George Bush'
		},
		{
		quote: "They misunderestimated me.",
		ans : 'George Bush'
		},
		{
		quote: "I don't think there's ever been anyone like me that's lasted. And I'm going to keep lasting.",
		ans : 'Paris Hilton'
		}
	];

///////BEGGINING OF THE QUIZ/////////
var quiz = function (){

	var newQuestion = function(){
		$('#quest_num').text(question[qnum].num);
		$('#quote q').text(question[qnum].quote);

		//WILL BE USED WHEN TEST IS COMPLETE//
		if (qnum > 4){
			alert("You have finished the game")
		}
	}
	newQuestion();
};

//EVENT LISTNER FOR SUBMIT BUTTON//

$('button#submit').on("click", function(event) {
	event.preventDefault();
	console.log("Is this working?");


	//STORE THE VALUE FROM THE RADIO BOX///
	$("input[type='radio']").each(function(){
		if((this).is(":checked")) {
			response == $(this[value=""]).val();
		}
	})
	if(response == question[qnum].ans){
		correctAnswer++;
		qnum++; 
		alert("Good job!");
		$('#answered').text(qnum);
		$('correct').text(correctAnswer);

	} else {
		wrongAnswer++;
		qnum++;
		alert("You are wrong");
		$('#answered').text(qnum);
		$('#incorrect').text(wrongAnswer);		
	}

	$("#quest_num").text(qnum);
	$("quote").text(questions[qnum].quote);

});