
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

buttonEl.addEventListener ('click', selectAnswer())
	
// function qetAnswer(event) {
// 	var buttonEl = event.answer;
// getAnswer();

	// function  (event.target.textContent)
// }

function selectAnswer (event) {
	let text = event.answer.textContent;
	document.getElementById("results").innerHTML = text;

	selectAnswer();

choiceEl.onclick = "button"; {
	if (choicesEl = ".answer")
	console.log ("Correct!")

} 
console.log();
// buttonEl.addEventListener("click", )
};