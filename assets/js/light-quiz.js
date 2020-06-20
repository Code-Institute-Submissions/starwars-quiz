const start = document.getElementById("start-container");

const quiz = document.getElementById("quiz");

const mainQuiz = document.getElementById("main-quiz");

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
        imgSrc: "assets/images/aldy.jpg",
        optionA: "Naboo",
        optionB: "Tatooine",
        optionC: "Alderaan",
        optionD: "Kamino",
        correct: "C",
        icon: document.getElementById("icon1")
    },
    {
        question: "What was the name of this jedi?",
        imgSrc: "assets/images/kit.jpeg",
        optionA: "Kit Fisto",
        optionB: "Ki Adi Mundi",
        optionC: "Shaak Ti",
        optionD: "Plo Koon",
        correct: "A",
        icon: document.getElementById("icon2")
    },
    {
        question: "Which species stole the plans to the Death Star?",
        imgSrc: "assets/images/d-plans.png",
        optionA: "Gungan",
        optionB: "Gorax",
        optionC: "Jawa",
        optionD: "Bothan",
        correct: "D",
        icon: document.getElementById("icon3")
    },
    {
        question: "What odds does C-3P0 give Han for successfully navigating the asteroid field??",
        imgSrc: "assets/images/3po-mil.jpg",
        optionA: "370 to 1",
        optionB: "327,000 to 1",
        optionC: "3,720 to 1",
        optionD: "13,720 to 1",
        correct: "C",
        icon: document.getElementById("icon4")
    },
    {
        question: "Which clone gives the order to fire apon obi-wan on utapau?",
        imgSrc: "assets/images/obi-fall.png",
        optionA: "Captain Rex",
        optionB: "Commander Cody",
        optionC: "Commander Neyo",
        optionD: "Arc trooper Fives",
        correct: "B",
        icon: document.getElementById("icon5")
    },
    {
        question: "Where was Luke Skywalker originally headed to pick up power converters?",
        imgSrc: "assets/images/luke-pc.jpg",
        optionA: "Mos Eisley spaceport",
        optionB: "Tatooine Tavern",
        optionC: "Bestine Point",
        optionD: "Tosche Station",
        correct: "D",
        icon: document.getElementById("icon6")
    },
    {
        question: "What was Anakins Midi-chlorian count per cell?",
        imgSrc: "assets/images/medi.png",
        optionA: "Over 2,000,000",
        optionB: "Over 2,000",
        optionC: "Over 200,000",
        optionD: "Over 20,000",
        correct: "D",
        icon: document.getElementById("icon7")
    },
    {
        question: "Name this character?",
        imgSrc: "assets/images/unky.jpg",
        optionA: "Unkar Plutt",
        optionB: "Razur Froy",
        optionC: "Dobbu Scay",
        optionD: "Nien Nunb",
        correct: "A",
        icon: document.getElementById("icon8")
    },
    {
        question: "Who says the line 'Your focus determines your reality'?",
        imgSrc: "assets/images/luke-rey.jpg",
        optionA: "Obi-wan Kenobi",
        optionB: "Luke Skywalker",
        optionC: "Qui-Gon Jinn",
        optionD: "Mace Windu",
        correct: "C",
        icon: document.getElementById("icon9")
    },
    {
        question: "Finish this line... 'Why, you stuck-up, half-witted, scruffy-looking........!?'",
        imgSrc: "assets/images/leia.jpg",
        optionA: "bantha fodder",
        optionB: "nerf herder",
        optionC: "no-wood swindler",
        optionD: "buckethead",
        correct: "B",
        icon: document.getElementById("icon10")
    },
];

let lastQuestion = questions.length - 1;
let currentQuestion = 0;

function questionStructure() {
    let q = questions[currentQuestion];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
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
    let qIcon = questions[currentQuestion].icon;
    $(qIcon).css("color", "blue");
    console.log();
};

function wrongAnswer() {
    let qIcon = questions[currentQuestion].icon;
    $(qIcon).css("color", "red");
    console.log();
};

const questTimeLimit = 0;
let count = 20;
let countTimer = setInterval(1000);
let score = 0;
function counterStructure() {
    if (count >= questTimeLimit) {
        $(counter).text(count);
        count--;
    } else {
        count = 20;
        wrongAnswer();
        if(currentQuestion < lastQuestion) {
            currentQuestion++;
            questionStructure();
        } else {
            clearInterval(countTimer);
            mainQuiz.remove();
            scoreStructure();
        }
    } 
};

function checkAnswer(answer) {
    if(questions[currentQuestion].correct == answer) {
        score++;
        correctAnswer();
        console.log("Correct!");
    } else {
        wrongAnswer();
        console.log("Wrong!");
    }
    if (currentQuestion < lastQuestion) {
        count = 20;
        currentQuestion++;
        questionStructure();
    } else {
        clearInterval(countTimer);
        mainQuiz.remove();
        scoreStructure();
    }
};

$(start).click(function() {
    $(start).css('display','none');
    //counterStructure();
    countTimer = setInterval(counterStructure, 1000);
    questionStructure();
    $(quiz).css('display','block');
    $(progress).css('display')
});

function scoreStructure() {
    let scoreContainer = document.getElementById("score-container");
    let scorePercentage = score + "/10";
    if (score == 10) {var img = "assets/images/smart.jpg"
    } else if (score >= 9) {var img = "assets/images/good.jpg"
    } else if(score >= 7) {var img = "assets/images/mace.jpeg"
    } else if(score >= 5) {var img = "assets/images/average.jpeg"
    } else if(score >= 3) {var img = "assets/images/bad.jpeg"
    } else if(score >= 1) {var img = "assets/images/worst.jpg"};
    $(scoreContainer).css("display", "block");
    $(scoreContainer).html("<p>You are.....</p><img src=" + img + "><p>" + scorePercentage + "</p>");
};
