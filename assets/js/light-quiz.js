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
        imgSrc: "assets/images/q1.png",
        optionA: "Naboo",
        optionB: "Tatooine",
        optionC: "Alderaan",
        optionD: "Kamino",
        correct: "C"
    },
    {
        question: "What was the name of Emporer Palpatines master?",
        imgSrc: "#",
        optionA: "Darth Plagueis",
        optionB: "Darth Plaggmis",
        optionC: "Darth Tyranus",
        optionD: "Darth Tiryan",
        correct: "A"
    },
    {
        question: "Which species stole the plans to the Death Star?",
        imgSrc: "#",
        optionA: "Gungan",
        optionB: "Gorax",
        optionC: "Jawa",
        optionD: "Bothan",
        correct: "D"
    },
    {
        question: "What odds does C-3P0 give Han for successfully navigating the asteroid field??",
        imgSrc: "#",
        optionA: "370 to 1",
        optionB: "327,000 to 1",
        optionC: "3,720 to 1",
        optionD: "13,720 to 1",
        correct: "C"
    },
    {
        question: "Which clone gives the order to fire apon obi-wan on utapau?",
        imgSrc: "#",
        optionA: "Captain Rex",
        optionB: "Commander Cody",
        optionC: "Commander Neyo",
        optionD: "Arc trooper Fives",
        correct: "B"
    },
    {
        question: "Where was Luke Skywalker originally headed to pick up power converters?",
        imgSrc: "#",
        optionA: "Mos Eisley spaceport",
        optionB: "Tatooine Tavern",
        optionC: "Bestine Point",
        optionD: "Tosche Station",
        correct: "D"
    },
    {
        question: "What was Anakins Midi-chlorian count per cell?",
        imgSrc: "#",
        optionA: "Over 2,000,000",
        optionB: "Over 2,000",
        optionC: "Over 200,000",
        optionD: "Over 20,000",
        correct: "D"
    },
    {
        question: "Name this character?",
        imgSrc: "#",
        optionA: "Unkar Plutt",
        optionB: "Razur Froy",
        optionC: "Dobbu Scay",
        optionD: "Nien Nunb",
        correct: "A"
    },
    {
        question: "Who says the line 'Your focus determines your reality'?",
        imgSrc: "#",
        optionA: "Obi-wan Kenobi",
        optionB: "Ahsoka Tano",
        optionC: "Qui-Gon Jinn",
        optionD: "Mace Windu",
        correct: "C"
    },
    {
        question: "Finish this line... 'Why, you stuck-up, half-witted, scruffy-looking........!?'",
        imgSrc: "#",
        optionA: "bantha fodder",
        optionB: "nerf herder",
        optionC: "no-wood swindler",
        optionD: "buckethead",
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
    let qIndex = currentQuestion;
    if (currentQuestion <= lastQuestion, currentQuestion++) {
        progress.innerHTML += "<div class='progr' id=" + qIndex + "><i class='fas fa-jedi'></i></div>";
    }
};

function correctAnswer() {
    let icon = document.getElementsByClassName("fas");
    $(icon).css("color", "blue");
};

function wrongAnswer() {
    let icon = document.getElementsByClassName("fas");
    $(icon).css("color", "red");
};

const questTimeLimit = 0;
let count = 20;
let countTimer = setInterval(counterStructure, 1000);
let score = 1;

function counterStructure() {
    if (count >= questTimeLimit) {
        counter.innerHTML = count;
        count--;
    } else {
        count = 20;
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

function checkAnswer(answer) {
    if(questions[currentQuestion].correct == answer) {
        score++;
        correctAnswer();
        console.log("Correct!")
    } else {
        wrongAnswer();
        console.log("Wrong!")
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

$(start).click(function() {
    $(start).css('display','none');
    counterStructure();
    countTimer = setInterval(counterStructure, 1000);
    questionStructure();
    $(quiz).css('display','block');
    $(progress).css('display')
});

function scoreStructure() {
    let scoreContainer = document.getElementById("score-container");
    let scorePercentage = Math.round(100 * score / questions.length) + "%";
    let img = (scorePercentage == 100) ? "assets/images/6.png":
              (scorePercentage >= 85) ? "assets/images/5.png":
              (scorePercentage >= 70) ? "assets/images/4.png":
              (scorePercentage >= 50) ? "assets/images/3.png":
              (scorePercentage >= 30) ? "assets/images/2.png": "assets/images/worst.jpg";
    $(scoreContainer).css("display", "block");
    scoreContainer.innerHTML = "<img src=" + img + "><p>" + scorePercentage + "</p>";

};
