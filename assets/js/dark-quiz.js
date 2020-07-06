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
        question: "What was the name of Emporer Palpatines master?",
        imgSrc: "assets/images/plag.jpg",
        optionA: "Darth Plagueis",
        optionB: "Darth Plaggmis",
        optionC: "Darth Tyranus",
        optionD: "Darth Tiryan",
        correct: "A",
        icon: document.getElementById("icon1")
    },
    {
        question: "Name this character?",
        imgSrc: "assets/images/nute.jpeg",
        optionA: "Rune Haako",
        optionB: "Darth Bane",
        optionC: "Watto",
        optionD: "Nute Gunray",
        correct: "D",
        icon: document.getElementById("icon2")
    },
    {
        question: "What was Darth Sidious' first name?",
        imgSrc: "assets/images/palps.jpg",
        optionA: "Baaril",
        optionB: "Heeken",
        optionC: "Reeva",
        optionD: "Sheev",
        correct: "D",
        icon: document.getElementById("icon3")
    },
    {
        question: "Name this droid?",
        imgSrc: "assets/images/bb.jpg",
        optionA: "BB-8",
        optionB: "BB-7",
        optionC: "BB-9E",
        optionD: "BB-8E",
        correct: "C",
        icon: document.getElementById("icon4")
    },
    {
        question: "What species is General Grievous?",
        imgSrc: "assets/images/grevy.jpg",
        optionA: "Yuzzum",
        optionB: "Kaleesh",
        optionC: "Chagrian",
        optionD: "Devaronian",
        correct: "B",
        icon: document.getElementById("icon5")
    },
    {
        question: "Which of these is a sith homeworld?",
        imgSrc: "assets/images/sith-home.jpg",
        optionA: "Dantooine",
        optionB: "Dathomir",
        optionC: "Jedha",
        optionD: "Moraband",
        correct: "D",
        icon: document.getElementById("icon6")
    },
    {
        question: "Give the SITH name of this character?",
        imgSrc: "assets/images/count-d.jpeg",
        optionA: "Count Douku",
        optionB: "Darth Bane",
        optionC: "Darth Revan",
        optionD: "Darth Tyranus",
        correct: "D",
        icon: document.getElementById("icon7")
    },
    {
        question: "Out of these ships, which was the biggest?",
        imgSrc: "assets/images/star-d.jpeg",
        optionA: "Executor-class Star Destroyer",
        optionB: "Imperial-class Star Destroyer",
        optionC: "Harrower-class dreadnought",
        optionD: "AT-AT",
        correct: "A",
        icon: document.getElementById("icon8")
    },
    {
        question: "Who was the original commander of the Death Star?",
        imgSrc: "assets/images/d-plans.png",
        optionA: "Darth Vader",
        optionB: "Grand Admiral Thrawn",
        optionC: "Grand Moff Tarkin",
        optionD: "General Hux",
        correct: "C",
        icon: document.getElementById("icon9")
    },
    {
        question: "Finish this line... 'Be careful not to choke on........!?'",
        imgSrc: "assets/images/dv.jpg",
        optionA: "your ego",
        optionB: "your aspirations",
        optionC: "your overconfidence",
        optionD: "your dreams",
        correct: "B",
        icon: document.getElementById("icon10")
    },
];

$(document).ready(function(){
    $("#start").hover(function(){
        $(this).css("background-color", "#990000");
        $(this).css("color", "white");
    },
    function(){
        $(this).css("background-color", "#feda4a");
        $(this).css("color", "black");
    });
});

$(document).ready(function(){
    if ( $(window).width() > 1000) {
    $("#a").hover(function(){
        $(this).css("background-color", "#990000");
        $(this).css("color", "white");
    },
    function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
    });
};
});
$(document).ready(function(){
    if ( $(window).width() > 1000) {
    $("#b").hover(function(){
        $(this).css("background-color", "#990000");
        $(this).css("color", "white");
    },
    function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
    });
};
});
$(document).ready(function(){
    if ( $(window).width() > 1000) {
    $("#c").hover(function(){
        $(this).css("background-color", "#990000");
        $(this).css("color", "white");
    },
    function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
    });
};
});
$(document).ready(function(){
    if ( $(window).width() > 1000) {
    $("#d").hover(function(){
        $(this).css("background-color", "#990000");
        $(this).css("color", "white");
    },
    function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
    });
};
});

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
    let lightQuiz = document.getElementById("l-quiz");
    let scoreContainer = document.getElementById("score-container");
    let scorePercentage = score + "/10";
    if (score == 10) {var img = "assets/images/p-best.jpg"
    } else if (score >= 9) {var img = "assets/images/great.jpeg"
    } else if(score >= 7) {var img = "assets/images/count-d.jpeg"
    } else if(score >= 5) {var img = "assets/images/average.jpg"
    } else if(score >= 3) {var img = "assets/images/badish.jpg"
    } else if(score >= 0) {var img = "assets/images/b-droid.jpg"};
    $(scoreContainer).css("display", "block");
    $(scoreContainer).html("<p>You are.....</p><img src=" + img + "><p>" + scorePercentage + "</p>");
    $(lightQuiz).css("display", "block");
};
