//----Define-variables-------//

const homePage = document.getElementById("home-page");

const quizPage = document.getElementById("quiz-page");

const start = document.getElementById("start");

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

let exitButton = document.getElementsByClassName("exit-button");

let volumeButton = document.getElementsByClassName("volume-button");

let volumeOff = document.getElementsByClassName("volume-off-button");

let sideChooser = document.getElementsByClassName("selection-heading");
//------------choose-side-function-------

function lightSideButton() {
  $(sideChooser).hide();
  $(quizPage).show();
  $(startContain).show();
}

function darkSideButton() {
  $(sideChooser).hide();
  $(quizPage).show();
  $(startContain).show();
  questions = darkQuestions;
}

//----------questions---------------------------------

let questions = [
  q1 = [   
  {
    question: "What is the name of Princess Leia's home world?",
    imgSrc: "assets/images/aldy.jpg",
    optionA: "Naboo",
    optionB: "Tatooine",
    optionC: "Alderaan",
    optionD: "Kamino",
    correct: "C",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "What was the name of this jedi?",
    imgSrc: "assets/images/kit.jpeg",
    optionA: "Kit Fisto",
    optionB: "Ki Adi Mundi",
    optionC: "Shaak Ti",
    optionD: "Plo Koon",
    correct: "A",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "Which species stole the plans to the Death Star?",
    imgSrc: "assets/images/d-plans.png",
    optionA: "Gungan",
    optionB: "Gorax",
    optionC: "Jawa",
    optionD: "Bothan",
    correct: "D",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question:
      "What odds does C-3P0 give Han for successfully navigating the asteroid field?",
    imgSrc: "assets/images/3po-mil.jpg",
    optionA: "370 to 1",
    optionB: "327,000 to 1",
    optionC: "3,720 to 1",
    optionD: "13,720 to 1",
    correct: "C",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "Which clone gives the order to fire apon obi-wan on utapau?",
    imgSrc: "assets/images/obi-fall.png",
    optionA: "Captain Rex",
    optionB: "Commander Cody",
    optionC: "Commander Neyo",
    optionD: "Arc trooper Fives",
    correct: "B",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question:
      "Where was Luke Skywalker originally headed to pick up power converters?",
    imgSrc: "assets/images/luke-pc.jpg",
    optionA: "Mos Eisley spaceport",
    optionB: "Tatooine Tavern",
    optionC: "Bestine Point",
    optionD: "Tosche Station",
    correct: "D",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "What was Anakins Midi-chlorian count per cell?",
    imgSrc: "assets/images/medi.png",
    optionA: "Over 2,000,000",
    optionB: "Over 2,000",
    optionC: "Over 200,000",
    optionD: "Over 20,000",
    correct: "D",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "Name this character?",
    imgSrc: "assets/images/unky.jpg",
    optionA: "Unkar Plutt",
    optionB: "Razur Froy",
    optionC: "Dobbu Scay",
    optionD: "Nien Nunb",
    correct: "A",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "Who says the line 'Your focus determines your reality'?",
    imgSrc: "assets/images/luke-rey.jpg",
    optionA: "Obi-wan Kenobi",
    optionB: "Luke Skywalker",
    optionC: "Qui-Gon Jinn",
    optionD: "Mace Windu",
    correct: "C",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question:
      "Finish this line... 'Why, you stuck-up, half-witted, scruffy-looking........!?'",
    imgSrc: "assets/images/leia.jpg",
    optionA: "bantha fodder",
    optionB: "nerf herder",
    optionC: "no-wood swindler",
    optionD: "buckethead",
    correct: "B",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
  //next-set-of-questions
  q2 = [
  {
    question: "Who said, “Greed can be a powerful ally.”?",
    imgSrc: "assets/images/all-jedi.jpg",
    optionA: "Qui-Gon Jinn",
    optionB: "Obi-Wan Kenobi",
    optionC: "Mace Windu",
    optionD: "Anakin Skywalker",
    correct: "A",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "In 'A New Hope', at Mos Eisley spaceport, the Millennium Falcon was in which docking bay?",
    imgSrc: "assets/images/falcon-bay.png",
    optionA: "18",
    optionB: "94",
    optionC: "48",
    optionD: "72",
    correct: "B",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "Who is surrounded by droids before asking 'Do we have a Plan B'?",
    imgSrc: "assets/images/droidy.jpg",
    optionA: "Anakin Skywalker",
    optionB: "Han Solo",
    optionC: "Ahsoka Tano",
    optionD: "Obi-Wan Kenobi",
    correct: "D",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question:
      "In The Empire Strikes Back, whose call sign on Hoth was Echo 7?",
    imgSrc: "assets/images/hoth.jpg",
    optionA: "Luke Skywalker",
    optionB: "Han Solo",
    optionC: "Chewbacca",
    optionD: "Princess Leia",
    correct: "B",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "What does C3PO tell Uncle Owen he did at his first job?",
    imgSrc: "assets/images/c3p.jpg",
    optionA: "Programmed intergalactic turbines",
    optionB: "Programmed Binary Short turbines",
    optionC: "Intergalactic program translator",
    optionD: "Programmed Binary Load lifters",
    correct: "D",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question:
      "Name this character?",
    imgSrc: "assets/images/sabe.jpeg",
    optionA: "Padmé",
    optionB: "Sabé",
    optionC: "Fadmé",
    optionD: "Faamé",
    correct: "B",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "Fill in the blanks of Luke's line 'Not unless you can [blank],  [blank] or [blank]'.?",
    imgSrc: "assets/images/luke-pc.jpg",
    optionA: "Disrupt destroy the harvest or fly me off this planet.",
    optionB: "Stop time, end the harvest or triangulate me off this rock.",
    optionC: "Speed up time, stop the harvest or teleport me off this rock.",
    optionD: "Alter time, speed up the harvest or teleport me off this rock.",
    correct: "D",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "This character used to smuggle guns before opening a diner on Coruscant.",
    imgSrc: "assets/images/dex.jpeg",
    optionA: "Dexter Jettster",
    optionB: "Rex Sketter",
    optionC: "Hexitar Pulab",
    optionD: "Nien Nunb",
    correct: "A",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "How many limbs does Anakin/Vader loose?",
    imgSrc: "assets/images/robo.jpg",
    optionA: "One",
    optionB: "Two",
    optionC: "Three",
    optionD: "Four",
    correct: "D",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question:
      "What are Leia's final words to Han?'",
    imgSrc: "assets/images/leia.jpg",
    optionA: "I've always hated watching you leave",
    optionB: "If you see our son, bring him home",
    optionC: "Stop that, my hands are dirty",
    optionD: "May the force be with you",
    correct: "B",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
  //next-set-of-questions
  q3 = [
  {
    question: "Who originally stole the Millennium Falcon from Han Solo?",
    imgSrc: "assets/images/falcon-bay.png",
    optionA: "Ducain",
    optionB: "Unkar Plutt",
    optionC: "Kylo Ren",
    optionD: "Lando Calrissian",
    correct: "A",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "Which of the following is *NOT* a Maz Kanata quote?",
    imgSrc: "assets/images/maz.jpeg",
    optionA: "I know the force",
    optionB: "Where's my boyfriend",
    optionC: "I’ve seen evil take many forms",
    optionD: "We all need to fight",
    correct: "D",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "Where does Rey live on the planet of Jakku?",
    imgSrc: "assets/images/rey.jpg",
    optionA: "In the remains of a Star Destroyer",
    optionB: "In the remains of an AT-AT",
    optionC: "In a cave",
    optionD: "In the remains of a X-wing",
    correct: "B",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question:
      "What is Finn’s real name?",
    imgSrc: "assets/images/finn.jpg",
    optionA: "FN-2167",
    optionB: "FN-2187",
    optionC: "FN-2197",
    optionD: "FN-2139",
    correct: "B",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "What giant pig creature does Finn share a drink with on Jakku?",
    imgSrc: "assets/images/c3p.jpg",
    optionA: "Anooba",
    optionB: "Jakdore",
    optionC: "Wampa",
    optionD: "Happabore",
    correct: "D",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question:
      "Name this character?",
    imgSrc: "assets/images/bib.jpeg",
    optionA: "Jav Tektona",
    optionB: "Hez Koforna",
    optionC: "Bib Fortuna",
    optionD: "Misonda Bekka",
    correct: "C",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "Fill in the blanks of the line 'You will never find a more [blank] of [blank] and [blank].'",
    imgSrc: "assets/images/ben-ken.jpeg",
    optionA: "You will never find a more vile swarm of scum and villainy.",
    optionB: "You will never find a more grim gang of filth and gangsters.",
    optionC: "You will never find a more gruesome group of filth and villainy.",
    optionD: "You will never find a more wretched hive of scum and villainy.",
    correct: "D",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "What is the name of General Leia Organa’s ship?",
    imgSrc: "assets/images/le-ship.png",
    optionA: "Raddus",
    optionB: "Ebon Hawk",
    optionC: "Radian VII",
    optionD: "Nubian starship",
    correct: "A",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "What are the massive horse-like creatures on Canto Bight called?",
    imgSrc: "assets/images/plume.jpg",
    optionA: "Vulptices",
    optionB: "Kerons",
    optionC: "Plumeiars",
    optionD: "Fathiers",
    correct: "D",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question:
      "What was Leia's adopted mother called?'",
    imgSrc: "assets/images/le-mum.png",
    optionA: "Kesandra Organa",
    optionB: "Breha Organa",
    optionC: "Felanda Organa",
    optionD: "Teya Organa",
    correct: "B",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
  //next-set-of-questions
  q4 = [
  {
    question: "Who's quote is this 'The Force, the Jedi, all of it. It’s all true.'?",
    imgSrc: "assets/images/luke-rey.jpg",
    optionA: "Han Solo",
    optionB: "Obi-wan Kenobi",
    optionC: "Leia Organa",
    optionD: "Rey",
    correct: "A",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "What is Rey's relation to Palpatine?",
    imgSrc: "assets/images/maz.jpeg",
    optionA: "Sister",
    optionB: "Great grandaughter",
    optionC: "Daughter",
    optionD: "Grandaughter",
    correct: "D",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "What name does the Kaminoans give as to who ordered the clone army?",
    imgSrc: "assets/images/kamin.jpg",
    optionA: "Pyro-Lias",
    optionB: "Sifo-Dyas",
    optionC: "Niro-Kepas",
    optionD: "Zentra-Veas",
    correct: "B",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question:
      "Complete the quote: 'There's always...'",
    imgSrc: "assets/images/qui.jpeg",
    optionA: "another sith",
    optionB: "a bigger fish",
    optionC: "a master and an apprentice",
    optionD: "two sith",
    correct: "B",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "What species was Sebulba?",
    imgSrc: "assets/images/seb.jpeg",
    optionA: "Kompa",
    optionB: "Jakdore",
    optionC: "Pyro",
    optionD: "Dug",
    correct: "D",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question:
      "Name this character?",
    imgSrc: "assets/images/ani-mum.jpeg",
    optionA: "Sheev",
    optionB: "Preeva",
    optionC: "Shmi",
    optionD: "Mzai",
    correct: "C",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "Complete the quote: 'Just being around her again is...'",
    imgSrc: "assets/images/ani-pad.jpg",
    optionA: "Painful",
    optionB: "Breathtaking",
    optionC: "Amazing",
    optionD: "Intoxicating",
    correct: "D",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "Name this character?",
    imgSrc: "assets/images/cappy.jpeg",
    optionA: "Panaka",
    optionB: "Cavarna",
    optionC: "Pyloov",
    optionD: "Kanan",
    correct: "A",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "Who leads the Gungans' underwater community?",
    imgSrc: "assets/images/boss.jpeg",
    optionA: "Boss Naaz",
    optionB: "Boss Rass",
    optionC: "Boss Vaaz",
    optionD: "Boss Nass",
    correct: "D",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question:
      "As far as we know, what is the main crop of Uncle Owen’s farm?",
    imgSrc: "assets/images/le-mum.png",
    optionA: "Funnel caine",
    optionB: "Razor moss",
    optionC: "Water",
    optionD: "Flow portions",
    correct: "B",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
  //next-set-of-questions
  q5 = [
  {
    question: "What’s on the menu for breakfast with Luke’s Aunt Beru??",
    imgSrc: "assets/images/beru.jpeg",
    optionA: "Green juice",
    optionB: "Red salad",
    optionC: "Blue milk",
    optionD: "Red grains",
    correct: "C",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "During the attack on the first Death Star, what is Luke’s call sign?",
    imgSrc: "assets/images/fly-luke.jpg",
    optionA: "Red five",
    optionB: "Red nine",
    optionC: "Gold nine",
    optionD: "Gold leader",
    correct: "D",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "What did C-3PO say he isolated which interrupted Han and Leia’s first kiss?",
    imgSrc: "assets/images/kiss.jpg",
    optionA: "Hyper drive flux coupling",
    optionB: "Reverse power flux coupling",
    optionC: "Navigation drive coupling",
    optionD: "Forward speed turbine coupling",
    correct: "B",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question:
      "When Leia dresses as a bounty hunter to rescue Han, what name does she use?",
    imgSrc: "assets/images/l-bounty.jpg",
    optionA: "IG-88",
    optionB: "Boushh",
    optionC: "Bazzam",
    optionD: "Bossk",
    correct: "B",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "Which character from another movie appears in the Imperial Senate in Phantom Menace?",
    imgSrc: "assets/images/senate.jpeg",
    optionA: "Gizmo",
    optionB: "Predator",
    optionC: "Xenomorph",
    optionD: "E.T",
    correct: "D",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question:
      "Name this creature?",
    imgSrc: "assets/images/mando.png",
    optionA: "Barrg",
    optionB: "Blurrp",
    optionC: "Blurrg",
    optionD: "Borrg",
    correct: "C",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "What game did han solo win the millennium falcon",
    imgSrc: "assets/images/cards.jpeg",
    optionA: "Dejarik",
    optionB: "Shabatt",
    optionC: "Dejaak",
    optionD: "Sabacc",
    correct: "D",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "Which Star Wars film does NOT feature anyone’s hands being cut off?",
    imgSrc: "assets/images/robo.jpg",
    optionA: "Phantom Menace",
    optionB: "Attack of the clone",
    optionC: "Return of the jedi",
    optionD: "Revenge of the sith",
    correct: "A",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "How many languages does C-3PO claim to speak?",
    imgSrc: "assets/images/c3p.jpg",
    optionA: "Nine thousand",
    optionB: "Six thousand",
    optionC: "Nine million",
    optionD: "Six million",
    correct: "D",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question:
      "What are Yoda’s first instructions when he arrives at the Battle of Geonosis?",
    imgSrc: "assets/images/geo.jpg",
    optionA: "If Dooku escapes, rally more systems to his cause he will",
    optionB: "Around the survivors a perimeter create",
    optionC: "To the forward command centre take me",
    optionD: "Attack those Federation starships, we must",
    correct: "B",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
];

//---dark-side-questions------------

let darkQuestions = [
  q1 = [  
  {
    question: "What was the name of Emporer Palpatines master?",
    imgSrc: "assets/images/plag.jpg",
    optionA: "Darth Plagueis",
    optionB: "Darth Plaggmis",
    optionC: "Darth Tyranus",
    optionD: "Darth Tiryan",
    correct: "A",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "Name this character?",
    imgSrc: "assets/images/nute.jpeg",
    optionA: "Rune Haako",
    optionB: "Darth Bane",
    optionC: "Watto",
    optionD: "Nute Gunray",
    correct: "D",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "What was Darth Sidious' first name?",
    imgSrc: "assets/images/palps.jpg",
    optionA: "Baaril",
    optionB: "Heeken",
    optionC: "Reeva",
    optionD: "Sheev",
    correct: "D",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question: "Name this droid?",
    imgSrc: "assets/images/bb.jpg",
    optionA: "BB-8",
    optionB: "BB-7",
    optionC: "BB-9E",
    optionD: "BB-8E",
    correct: "C",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "What species is General Grievous?",
    imgSrc: "assets/images/grevy.jpg",
    optionA: "Yuzzum",
    optionB: "Kaleesh",
    optionC: "Chagrian",
    optionD: "Devaronian",
    correct: "B",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question: "Which of these is a sith homeworld?",
    imgSrc: "assets/images/sith-home.jpg",
    optionA: "Dantooine",
    optionB: "Dathomir",
    optionC: "Jedha",
    optionD: "Moraband",
    correct: "D",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "Give the SITH name of this character?",
    imgSrc: "assets/images/count-d.jpeg",
    optionA: "Count Douku",
    optionB: "Darth Bane",
    optionC: "Darth Revan",
    optionD: "Darth Tyranus",
    correct: "D",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "Out of these ships, which was the biggest?",
    imgSrc: "assets/images/star-d.jpeg",
    optionA: "Executor-class Star Destroyer",
    optionB: "Imperial-class Star Destroyer",
    optionC: "Harrower-class dreadnought",
    optionD: "AT-AT",
    correct: "A",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "Who was the original commander of the Death Star?",
    imgSrc: "assets/images/d-plans.png",
    optionA: "Darth Vader",
    optionB: "Grand Admiral Thrawn",
    optionC: "Grand Moff Tarkin",
    optionD: "General Hux",
    correct: "C",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question: "Finish this line... 'Be careful not to choke on........!?'",
    imgSrc: "assets/images/dv.jpg",
    optionA: "your ego",
    optionB: "your aspirations",
    optionC: "your overconfidence",
    optionD: "your dreams",
    correct: "B",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
  //next-set-of-questions
  [q2 =
  {
    question: "In Star Wars, what does the acronym AT-ST stand for?",
    imgSrc: "assets/images/at-st.jpeg",
    optionA: "Adverse Tactical Scout Transport",
    optionB: "Armed Tactical Scout Transport",
    optionC: "All-Terrain Scout Transport",
    optionD: "Armed Tactical Swift Transport",
    correct: "C",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "Who conspired with Count Dooku to have Jabba the Hutt’s son Rotta killed?",
    imgSrc: "assets/images/jabb.jpg",
    optionA: "Chibo",
    optionB: "Waddo",
    optionC: "Ziro",
    optionD: "Jango Fett",
    correct: "C",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "What did Darth Vader say after Luke fell into the carbonite freezing chamber?",
    imgSrc: "assets/images/carbon.png",
    optionA: "You're no match for me",
    optionB: "How disappointing",
    optionC: "You're not a jedi yet",
    optionD: "All to easy",
    correct: "D",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question: "What system did the First Order’s Starkiller base destroy in The Force Awakens?",
    imgSrc: "assets/images/s-killer.jpeg",
    optionA: "Hosnian",
    optionB: "Bespin",
    optionC: "Takodana",
    optionD: "Helska",
    correct: "A",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "What is the name of the First Order’s 'Gorilla Walkers'?",
    imgSrc: "assets/images/at-walk.jpeg",
    optionA: "OG-9",
    optionB: "AT-M6",
    optionC: "AT-ACT",
    optionD: "AT-OG",
    correct: "B",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question: "How many guards are in Supreme Leader Snoke’s Elite Praetorian Guard?",
    imgSrc: "assets/images/snoke-g.jpeg",
    optionA: "7",
    optionB: "6",
    optionC: "9",
    optionD: "8",
    correct: "D",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "Which is the real line?",
    imgSrc: "assets/images/father-v.jpg",
    optionA: "Yes Luke, I am your father",
    optionB: "No Luke, I am your father",
    optionC: "Luke, I am your father",
    optionD: "No, I am your father",
    correct: "D",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "Who created the rule of two?",
    imgSrc: "assets/images/two-rule.jpg",
    optionA: "Darth Bane",
    optionB: "Darth Sidious",
    optionC: "Darth Plagueis",
    optionD: "Darth Revan",
    correct: "A",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "Who says the quote 'Jedi. Their order is a fading light in the dark'?",
    imgSrc: "assets/images/sith-group.jpg",
    optionA: "Darth Maul",
    optionB: "General Grevious",
    optionC: "Asajj Ventress",
    optionD: "Savage Opress",
    correct: "C",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question: "What is the name of darth Vader's ship?'",
    imgSrc: "assets/images/v-ship.jpg",
    optionA: "TIE Vanguard v2",
    optionB: "TIE Advanced x1",
    optionC: "TIE Silencer v1",
    optionD: "TIE Oppressor x2",
    correct: "B",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
  //next-set-of-questions
  [q3 =
  {
    question: "What does the name 'Darth Vader' mean?",
    imgSrc: "assets/images/father-v.jpg",
    optionA: "Dark Father",
    optionB: "Dark Lord",
    optionC: "Evil Lord",
    optionD: "Dark Vessel",
    correct: "A",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "What did Maul's legs resemble when Savage found him on Lotho Minor?",
    imgSrc: "assets/images/maul.jpeg",
    optionA: "Scorpion",
    optionB: "Snake",
    optionC: "Spider",
    optionD: "Bird",
    correct: "C",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "What does Palapatine address Yoda as during their duel?",
    imgSrc: "assets/images/palps.jpg",
    optionA: "Green wretch",
    optionB: "Arrogant old man",
    optionC: "Weak old man",
    optionD: "Little green friend",
    correct: "D",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question: "Kylo Ren's Crossguard Sabre Design Dates Back To Which Key Sith Time Period?",
    imgSrc: "assets/images/sith-home.jpg",
    optionA: "Hundred year darkness",
    optionB: "Great Scourge of Malachor",
    optionC: "The rule of Revan",
    optionD: "Plague of Bane",
    correct: "B",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "Who Does Kanan Jarus Give The Sith Holocron To?",
    imgSrc: "assets/images/holo.jpeg",
    optionA: "Bendu",
    optionB: "Ezra",
    optionC: "Darth Maul",
    optionD: "Obi-wan",
    correct: "A",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question: "Where Is Darth Vader's Castle?",
    imgSrc: "assets/images/castle.jpeg",
    optionA: "Malachor",
    optionB: "Coruscant",
    optionC: "Crait",
    optionD: "Mustafar",
    correct: "D",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "Which Species Was Palpatine's Mentor?",
    imgSrc: "assets/images/plaggy.jpg",
    optionA: "Rodian",
    optionB: "Zabrak",
    optionC: "Kerp",
    optionD: "Muun",
    correct: "D",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "Which trilogy is the word sith never mentioned?",
    imgSrc: "assets/images/palps.jpg",
    optionA: "Prequel trilogy",
    optionB: "Original trilogy",
    optionC: "Sequel trilogy",
    optionD: "None",
    correct: "B",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "Name this character?",
    imgSrc: "assets/images/solo-bad.jpg",
    optionA: "Bov Seren",
    optionB: "Dryden Vos",
    optionC: "Voss Genera",
    optionD: "Serin Val",
    correct: "B",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question: "What planet would you find a Rancor?'",
    imgSrc: "assets/images/rancor.jpg",
    optionA: "Jakku",
    optionB: "Tattioune",
    optionC: "Exegol",
    optionD: "Dagobah",
    correct: "B",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
  //next-set-of-questions
  [q4 =
  {
    question: "What does a sith wayfinder lead you?",
    imgSrc: "assets/images/silencer.png",
    optionA: "To jedi",
    optionB: "To Moroband",
    optionC: "To Palpatine",
    optionD: "To Exegol",
    correct: "D",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "What species is Darth Maul?",
    imgSrc: "assets/images/maul.jpeg",
    optionA: "Dothtotian",
    optionB: "Devizian",
    optionC: "Zabrak",
    optionD: "Zelousk",
    correct: "C",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "Who was the first ever Sith?",
    imgSrc: "assets/images/palps.jpg",
    optionA: "Ajunta Pall",
    optionB: "Darth Revan",
    optionC: "Darth Bane",
    optionD: "Pjanto Ven",
    correct: "A",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question: "Why are sith lightsabers red?",
    imgSrc: "assets/images/dark-rey.jpg",
    optionA: "Red crystal",
    optionB: "Bleeding process",
    optionC: "Stolen crystal",
    optionD: "Killing jedi",
    correct: "B",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "What is the name of Jabba's pet?",
    imgSrc: "assets/images/j-pet.png",
    optionA: "Salacious B. Crumb",
    optionB: "Feisty D. Frisker",
    optionC: "Flita R. Fricmuffin",
    optionD: "Boba Tikkata",
    correct: "A",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question: "How do Tusken raiders travel?",
    imgSrc: "assets/images/tusk.jpg",
    optionA: "V-formation",
    optionB: "Spread wide",
    optionC: "Lightspeed",
    optionD: "Straight line",
    correct: "D",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "What species was snoke?",
    imgSrc: "assets/images/snoke.jpeg",
    optionA: "Clone",
    optionB: "Cyborg",
    optionC: "Kaleesh",
    optionD: "Muun",
    correct: "A",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "Where would you find a Dianoga?",
    imgSrc: "assets/images/thinking.jpg",
    optionA: "Naboo",
    optionB: "Mos Eisley",
    optionC: "Deathstar",
    optionD: "Asteroid",
    correct: "C",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "Name this character?",
    imgSrc: "assets/images/blue-ele.jpg",
    optionA: "Bov Seren",
    optionB: "Max Rebo",
    optionC: "Ele cofont",
    optionD: "Nalal Peyo",
    correct: "B",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question: "Which of these was Darth Vaders apprentice?'",
    imgSrc: "assets/images/dv.jpg",
    optionA: "Darth Zekron",
    optionB: "Starkiller",
    optionC: "Malingsar",
    optionD: "Darth Vestro",
    correct: "B",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
  //next-set-of-questions
  [q5 =
  {
    question: "What is the name of Boba Fett’s ship?",
    imgSrc: "assets/images/bob-ship.jpeg",
    optionA: "Slave 2",
    optionB: "Concave 1",
    optionC: "Concave 2",
    optionD: "Slave 1",
    correct: "D",
    icon: document.getElementsByClassName("icon1"),
  },
  {
    question: "Which of these is a real sith?",
    imgSrc: "assets/images/dark-rey.jpg",
    optionA: "Darth Sion",
    optionB: "Darth Veral",
    optionC: "Darth Moren",
    optionD: "Darth Kiotan",
    correct: "A",
    icon: document.getElementsByClassName("icon2"),
  },
  {
    question: "What language are the words written on Darth Vader’s chest piece in?",
    imgSrc: "assets/images/palps.jpg",
    optionA: "Hebrew",
    optionB: "Latin",
    optionC: "Gaelic",
    optionD: "Akkadian",
    correct: "A",
    icon: document.getElementsByClassName("icon3"),
  },
  {
    question: "Which two sectors does The Empire Strikes Back take place in?",
    imgSrc: "assets/images/sectors.jpg",
    optionA: "Deratus and Tapani",
    optionB: "Sluis and Anoat",
    optionC: "Bakura and Noonian",
    optionD: "Gomar and Velcar",
    correct: "B",
    icon: document.getElementsByClassName("icon4"),
  },
  {
    question: "What does “TIE” stand for in TIE Fighter?",
    imgSrc: "assets/images/tie.jpg",
    optionA: "Tactical Ion Engines",
    optionB: "Tactical Ion Evader",
    optionC: "Turbo Ion Engines",
    optionD: "Twin Ion Engines",
    correct: "D",
    icon: document.getElementsByClassName("icon5"),
  },
  {
    question: "How many people does Darth Vader kill in The Empire Strikes Back?",
    imgSrc: "assets/images/dv.jpg",
    optionA: "2",
    optionB: "3",
    optionC: "1",
    optionD: "4",
    correct: "A",
    icon: document.getElementsByClassName("icon6"),
  },
  {
    question: "How big was the exhaust port on the first death star?",
    imgSrc: "assets/images/d-plans.png",
    optionA: "1 meter",
    optionB: "2 meters",
    optionC: "3 meters",
    optionD: "4 meters",
    correct: "B",
    icon: document.getElementsByClassName("icon7"),
  },
  {
    question: "Whats the most commonly used language in star wars called?",
    imgSrc: "assets/images/arabe.jpg",
    optionA: "Zalestro",
    optionB: "Midesh",
    optionC: "Aurebesh",
    optionD: "Valkres",
    correct: "C",
    icon: document.getElementsByClassName("icon8"),
  },
  {
    question: "What is the red substance found on the planet Crait?",
    imgSrc: "assets/images/crait.jpg",
    optionA: "Dirt",
    optionB: "Salt",
    optionC: "Chalk",
    optionD: "Ash",
    correct: "B",
    icon: document.getElementsByClassName("icon9"),
  },
  {
    question: "How did Darth Sidious kill his former master?",
    imgSrc: "assets/images/palps.jpg",
    optionA: "Poisoned him",
    optionB: "With the force",
    optionC: "In a duel",
    optionD: "In his sleep",
    correct: "D",
    icon: document.getElementsByClassName("icon10"),
  },
  ],
];

//---------this-changes-the-color-of-the-menu-buttons-when-hovered-over---------

$(document).ready(function () {
  $(".start-how").hover(
    function () {
      $(this).css("background-color", "#B69118");
      $(this).css("color", "white");
    },
    function () {
      $(this).css("background-color", "#feda4a");
      $(this).css("color", "black");
    }
  );
});

//-----for-larger-screens-this-changes-the-option-background-color-of-the-one-the-user-is-hovering-over-------

$(document).ready(function () {
  if ($(window).width() > 1000) {
    $("#a").hover(
      function () {
        $(this).css("background-color", "#2A76B0");
        $(this).css("color", "white");
      },
      function () {
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
      }
    );
  }
});
$(document).ready(function () {
  if ($(window).width() > 1000) {
    $("#b").hover(
      function () {
        $(this).css("background-color", "#2A76B0");
        $(this).css("color", "white");
      },
      function () {
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
      }
    );
  }
});
$(document).ready(function () {
  if ($(window).width() > 1000) {
    $("#c").hover(
      function () {
        $(this).css("background-color", "#2A76B0");
        $(this).css("color", "#FFFFFF");
      },
      function () {
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
      }
    );
  }
});
$(document).ready(function () {
  if ($(window).width() > 1000) {
    $("#d").hover(
      function () {
        $(this).css("background-color", "#2A76B0");
        $(this).css("color", "white");
      },
      function () {
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
      }
    );
  }
});

//-------randomize-questions---------

function randomQuest() {
    let randomNumber = Math.floor(Math.random() * 5); 
    console.log()
    randomQuestion = questions[randomNumber][currentQuestion];
}

let lastQuestion = questions[0].length - 1;
let currentQuestion = 0;
let randomQuestion;

//------question-structure-fills-the-question-and-options-----

function questionStructure() {
  randomQuest();  
  let q = randomQuestion;
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  question.innerHTML = "<p>" + q.question + "</p>";
  optionA.innerHTML = q.optionA;
  optionB.innerHTML = q.optionB;
  optionC.innerHTML = q.optionC;
  optionD.innerHTML = q.optionD;
}

//-------progress-structure-tell-the-quiz-to-move-to-the-next-question-----

function progressStructure() {
  let qIndex = currentQuestion;
  if ((currentQuestion <= lastQuestion, currentQuestion++)) {
    progress.innerHTML +=
      "<div class='progr' id=" + qIndex + "><i class='fas fa-jedi'></i></div>";
  }
}

//-------this-changes-icon-colors-representing-right-wrong--------
function correctAnswer() {
  let qIcon = randomQuestion.icon;
  $(qIcon).css("color", "blue");
  rightAudio();
  console.log();
}

function wrongAnswer() {
  let qIcon = randomQuestion.icon;
  $(qIcon).css("color", "red");
  wrongAudio();
  console.log();
}

//-------programs-the-timer--------

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
    if (currentQuestion < lastQuestion) {
      currentQuestion++;
      questionStructure();
    } else {
      clearInterval(countTimer);
      mainQuiz.remove();
      scoreStructure();
    }
  }
}

//-------checks-answer-of-user------

function checkAnswer(answer) {
  if (randomQuestion.correct == answer) {
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
}

//------start-quiz-function------this-sets-up-the-quiz-as-user-clicks-start-button
let startContain = document.getElementById("start-container");
$(start).click(function () {
  $(startContain).hide();
  countTimer = setInterval(counterStructure, 1000);
  questionStructure();
  $(quiz).show();
  $(progress).show();
  audio.gameActive = true;
  backgroundMusic();
});

//------score-structure---to-display-someones-score-with-the-image-asigned-to-that-score

function scoreStructure() {  
  let share = document.getElementById("sharer");
  let scoreContainer = document.getElementById("score-container");
  let scorePercentage = score + "/10";
  if (questions === darkQuestions) {darkScoreStructure();
  } else {lightScoreStructure();}
  function lightScoreStructure() {
    if (score == 10) {
    var img = "assets/images/smart.jpg";
  } else if (score >= 9) {
    var img = "assets/images/good.jpg";
  } else if (score >= 7) {
    var img = "assets/images/mace.jpeg";
  } else if (score >= 5) {
    var img = "assets/images/average.jpeg";
  } else if (score >= 3) {
    var img = "assets/images/bad.jpeg";
  } else if (score >= 0) {
    var img = "assets/images/worst.jpg";
  }
  $(scoreContainer).css("display", "block");
  $(scoreContainer).html(
    "<p>You are.....</p><img src=" + img + "><p>" + scorePercentage + "</p>"
  );
  $(share).show();
  audio.gameActive = false;
  quizCompleteAudio();
  $(".exit-score").show();
  }
  function darkScoreStructure() {  
    if (score == 10) {
    var img = "assets/images/p-best.jpg";
  } else if (score >= 9) {
    var img = "assets/images/great.jpeg";
  } else if (score >= 7) {
    var img = "assets/images/count-d.jpeg";
  } else if (score >= 5) {
    var img = "assets/images/average.jpg";
  } else if (score >= 3) {
    var img = "assets/images/badish.jpg";
  } else if (score >= 0) {
    var img = "assets/images/b-droid.jpg";
  }
  $(scoreContainer).css("display", "block");
  $(scoreContainer).html(
    "<p>You are.....</p><img src=" + img + "><p>" + scorePercentage + "</p>"
  );
  $(share).show();
  audio.gameActive = false;
  quizCompleteAudio();
  $(".exit-score").show();
  }
}

//------Tutorial-modal-----------------------------

let instruct = document.getElementsByClassName("tutorial-button");
let tutorial = document.getElementsByClassName("modal");
let exitModal = document.getElementsByClassName("modal-close");

$(instruct).click(function () {
  $(tutorial).show();
  laserButton();
});

$(exitModal).click(function () {
  $(tutorial).hide();
  closeButton();
});

//------Exit-button-----------------------------

$(exitButton).click(function () {
  location.reload();
  return false;
});