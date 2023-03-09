
var currentQuestionIndex = 0;


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('Start');
var qHeaderEl = document.getElementById("qHeader")
var choiceEl = document.getElementById("choices")
var timerCotainer = document.getElementById("timer")
var startPage = document.querySelector(".start")


var questions = [
    {
        title: "The keyword let was:",
        choices: ["intorduced in ES6 in 2015", "cannot be redeclared", "has a Block Scope", "All of the above"],
        answer: "All of the above",
        
	
    },

    {
        title: "What is the fuction of a semicolon in Javascript?",
        choices:["it gives a pause in a sentence", "it lets the copmputer know you're doen with that line of code", "It seperates statements", "It ends the exectuion of a function"],
        answer:  "It seperates statements",
		
    },

    {
        title: "How many Datatypes are there in JavaSctript?",
        choices: ["10", "8", "6", "unlimited", "5"],
        answer: "8",
		
    },

    {
        title: "What does JSON stand for?",
        choices:["Javascript Open Now","JavaScript Only Newer", "JavaScript Object Notation","Javascript over network"],
        answer: "JavaScript Object Notation",
		
    },
];

let currentQuestion = 0
let finished = false
let timer = 45

let allSavedInitials = localStorage.getItem('results')
let allUsers = JSON.parse(allSavedInitials)

function displayUsers (list){
    document.querySelector('.nameList').innerHTML = " "
    list.map((item, i)=>{
        let element = `<li> ${item.name} : ${item.score} </li>`
        document.querySelector('.nameList').insertAdjacentHTML('beforeend', element)
    })
}
displayUsers(allUsers || [])

submitButton.addEventListener("click", ()=>{
	

    timerCotainer.textContent = timer
   
    setInterval(()=>{
        if(!finished){
            timer = timer - 1
        }
        timerCotainer.textContent = timer
    }, 1000)

    setTimeout(()=>{
        quizContainer.innerHTML = ""
        let timeUp= `<h1>Time Up: </h1>`
        quizContainer.insertAdjacentHTML('afterbegin', timeUp)
        displayScore()
    }, 45000)

    displayQuestion()

});



function displayQuestion (){
    startPage.style.display = "none"
    choiceEl.innerHTML = " "
    qHeaderEl.innerHTML = " "
    qHeaderEl.textContent = questions[currentQuestion].title;

    questions[currentQuestion].choices.map((item, i)=>{
        let button = `<button id="optionBtn" name="${item}" > ${item} </button>`
        choiceEl.insertAdjacentHTML('beforeend', button)
    })
}



//This function handles option selection
quizContainer.addEventListener('click', function(e){
    const itemSelected = e.target.name
    if (!itemSelected) return
    questions[currentQuestion].selectedOption = itemSelected
    if(itemSelected != questions[currentQuestion].answer){
        timer = timer - 10
    }

    if(currentQuestion == 3) {
        displayScore() 
    }

    currentQuestion = currentQuestion + 1
    displayQuestion()
    
})
//trrminal


function displayScore (){
    console.log(questions)
    let correctlyAnswered = questions.filter(item=>item.selectedOption == item.answer)
    console.log(correctlyAnswered)
    resultsContainer.insertAdjacentHTML('beforeend', `<h2> SCORE: ${timer} seconds</h2>`)
    finished = true
    document.querySelector('.initialTab').style.display = 'block'
}

let initials 
document.querySelector('.btnSaveInitial').addEventListener('click', function(){
    const username = document.querySelector('.initialsInpt').value
    if(username == ''){
        alert('Initials cannot be empty')
        return
    }
    
   const savedInitials = localStorage.getItem('results')
   if(!savedInitials){
        initials=[]
   }else{
        initials = [...JSON.parse(savedInitials)]
   }
   localStorage.setItem('results', JSON.stringify([...initials, {name:username, score:timer}]))
   displayUsers([...initials, {name:username, score:timer}])
    
})






















// buttonEl.addEventListener ('click', selectAnswer())
	
// // function qetAnswer(event) {
// // 	var buttonEl = event.answer;
// // getAnswer();

// 	// function  (event.target.textContent)
// // }

// function selectAnswer (event) {
// 	let text = event.answer.textContent;
// 	document.getElementById("results").innerHTML = text;

// 	selectAnswer();

// choiceEl.onclick = "button"; {
// 	if (choicesEl = ".answer")
// 	console.log ("Correct!")

// } 
// console.log();
// // buttonEl.addEventListener("click", )
// };