const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("quest-img");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const optionA = document.getElementById("a");
const optionB = document.getElementById("b");
const optionC = document.getElementById("c");
const optionD = document.getElementById("d");

const progress = document.getElementById("progress");

let questions = [
    {
        question: "What is the name of Princess Leia's home world?",
        imgSrc: "#",
        optionA: "Naboo",
        optionB: "Tatooine",
        optionC: "Alderaan",
        optionD: "Kamino",
        correct: "C"
    },
    {
        question: "What was the name of Emporer Palpatines master?",
        imgSrc: "#",
        optionA: "Darth Plagueis the wise",
        optionB: "Darth Plaggmis the cunning",
        optionC: "Darth Plagueis the cunning",
        optionD: "Darth Plaggmis the wise",
        correct: "A"
    },
    {
        question: "Question 3?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
        correct: "D"
    },
    {
        question: "Question 4?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
        correct: "C"
    },
    {
        question: "Question 5?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
        correct: "B"
    },
    {
        question: "Question 6?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
        correct: "D"
    },
    {
        question: "Question 7?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
        correct: "D"
    },
    {
        question: "Question 8?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
        correct: "A"
    },
    {
        question: "Question 9?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
        correct: "C"
    },
    {
        question: "Question 10?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
        correct: "B"
    },
];

let lastQuestion = questions.length - 1;
let currentQuestion = 0;

function questionStructure() {
    let q = questions[currentQuestion];
    qImg.innerHTML = "img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
};

function progressStructure() {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex ++) {
        progress.innerHTML += "<div class='progr' id=" + qIndex + "></div>";
    }
};

function correctAnswer() {
    document.getElementById(currentquestion).style.backgroundColor = "blue";
};

function wrongAnswer() {
    document.getElementById(currentquestion).style.backgroundColor = "red";
};

const questTimeLimit = 20;
let count = 0;
let countTimer = setInterval(counterStructure, 1000);
let score = 0;

function counterStructure() {
    if (count <= questTimeLimit) {
        counter.innerHTML = count;
        count++;
    } else {
        count = 0;
        wrongAnswer();
        if(currentquestion < lastQuestion) {
            currentquestion++;
            questionStructure();
        } else {
            clearInterval(countTimer);
            scoreStructure();
        }
    } 
};

function answerCheck(answer) {
    if(questions[currentquestion].correct == answer) {
        score++;
        correctAnswer();
    } else {
        wrongAnswer();
    }
    if (currentQuestion < lastQuestion) {
        count = 0;
        currentQuestion++;
        questionStructure();
    } else {
        clearInterval(countTimer);
        scoreStructure();
    }
};

start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    counterStructure();
    countTimer = setInterval(counterStructure, 1000);
    questionStructure();
    quiz.css.style.display = "block";
};

function scoreStructure() {
    let scoreContainer = document.getElementById("score-container");
    let scorePercentage = Math.round(100 * score / questions.length);
    let img = (scorePercentage == 100) ? "assets/images/6.png":
              (scorePercentage >= 85) ? "assets/images/5.png":
              (scorePercentage >= 70) ? "assets/images/4.png":
              (scorePercentage >= 50) ? "assets/images/3.png":
              (scorePercentage >= 30) ? "assets/images/2.png": "assets/images/1.png";
    scoreContainer.style.display = "block";
    scoreContainer.innerHTML = "<img src=" + img + "><p>" + scorePercentage + "</p>";
}
