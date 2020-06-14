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
        question: "Question 1?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
        correct: "C"
    },
    {
        question: "Question 2?",
        imgSrc: "#",
        optionA: "First option",
        optionB: "Second option",
        optionC: "Third option",
        optionD: "Fourth option",
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
let currentquestion = 0;

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
}