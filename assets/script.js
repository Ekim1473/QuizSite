
var currentQuestionIndex = 0;


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('Start');
var qHeaderEl = document.getElementById("qHeader")
var choiceEl = document.getElementById("choices")
var startPage = document.querySelector(".start")


var questions = [
    {
        title: "The keyword let was:",
        choices: ["intorduced in ES6 in 2015", "cannot be redeclared", "has a Block Scope", "All of the above"],
        answer: "all of the above",
	
    },

    {
        title: "What is the fuction of a semicolon in Javascript?",
        choices:["it gives a pause in a sentence", "it lets the copmputer know you're doen with that line of code", "It seperates statements", "It ends the exectuion of a function"],
        answer: "It seperates statements",
		
    },

    {
        title: "How many Datatypes are there in JavaSctript?",
        choices: ["10", "8", "6", "unlimited", "5"],
        answer: "8",
		
    },

    {
        title: "What does JSON stand for?",
        choices:["Javascript Open Now","JavaScript Only Newer", "JavaScript Object Notation","Javascript over network"],
        answer: "javaScript Object Notation",
		
    },
];

submitButton.addEventListener("click", ()=>{
	
startPage.style.display = "none"
qHeaderEl.textContent = questions[0].title;



for(var i = 0; i < 4; i++){
	var buttonEl = document.createElement("button");
	buttonEl.textContent = questions[0].choices[i]
	choiceEl.appendChild(buttonEl)
}

});

choiceEl.onclick = "button";
console.log("button");
// buttonEl.addEventListener("click", )







// generateQuiz();

// function showQuestions(questions, quizContainer){
// 	// we'll need a place to store the output and the answer choices
// 	var output = [localStorage];
// 	var answers;

// 	// for each question...
// 	for(var i=0; i<questions.length; i++){
		
// 		// first reset the list of answers
// 		answers = [];

// 		// for each available answer to this question...
// 		for(letter in questions[i].answers){

// 			// ...add an html radio button
// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
// 			);
// 		}

// 		// add this question and its answers to the output
// 		output.push(
// 			'<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');
// };
// showQuestions(questions, quizContainer);
// console.log(quizContainer);

// function showResults(questions, quizContainer, resultsContainer){
	
// 	// gather answer containers from our quiz
// 	var answerContainers = quizContainer.querySelectorAll('.answers');
	
// 	// keep track of user's answers
// 	var userAnswer = '';
// 	var numCorrect = 0;
	
// 	// for each question...
// 	for(var i=0; i<questions.length; i++){

// 		// find selected answer
// 		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
// 		// if answer is correct
// 		if(userAnswer===questions[i].correctAnswer){
// 			// add to the number of correct answers
// 			numCorrect++;
			
// 			// color the answers green
// 			answerContainers[i].style.color = 'lightgreen';
// 		}
// 		// if answer is wrong or blank
// 		else{
// 			// color the answers red
// 			answerContainers[i].style.color = 'red';
// 		}
// 	}

// 	// show number of correct answers out of total
// 	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// };
// console.log(showResults);

// submitButton.onclick = (showResults)=>{
// 	showResults(questions, quizContainer, resultsContainer);
// };

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
// console.log(generateQuiz);
