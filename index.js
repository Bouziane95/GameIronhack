const divHidden = document.getElementById("hidden-msg");
const welcomeMsg = document.getElementById("welcome-message");
const sentenceToLoad = document.getElementById("sentence-to-load");
const questionsAnswerBlock = document.getElementById("qa-container");
const questionText = document.getElementById("question-div");
const answerText = document.getElementById("children-div");
const flowerImg = document.getElementById("flowey-img");
let buttons = document.querySelectorAll(".little-children-div");
let counter = 0;
const audio = new Audio("./musics/megalovania.mp3");
const defeatAudio = new Audio("./musics/gameOver.mp3");
let rainAnimation = document.getElementById("rain-video");
let groundLine = document.getElementById("lvl-line");
let score = document.getElementById("score");
let hp = document.getElementById("heart");
let oneHeart = document.getElementById("one-heart");
const asgorr = document.getElementById("asgorr");
const papyrus = document.getElementById("papyrus");
const sans = document.getElementById("sans");
const flowey = document.getElementById("flowey");
const gameLost = document.getElementById("game-restart");
const yesContinue = document.getElementById("yes-continue");
const noContinue = document.getElementById("no-continue");
const gameOverMsg = document.getElementById("game-over");
const restartMsg = document.getElementById("restart");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var timer = setInterval(setTime, 1000);
var countHP = 3;
var pauseTimer = false;

var questionsArray = [
  {
    question: "What do plant eat ?",
    answer: ["Insects", "Zombies", "Insects", "Humans"],
    flowerImage: "./images/Flowey.jpeg",
    flowerAnswer: "",
  },
  {
    question: "Do i love eating ?",
    answer: [
      "Definitly Yes",
      "What ? Since when a plant can talk ?",
      "No",
      "Yeah but not me",
    ],
    flowerImage: "./images/AmusedFlowey.png",
    flowerAnswer: "You are perfectly right",
  },
  {
    question: "Can i have one bite of you ?",
    answer: ["RUN", "RUN", "RUN", "RUN"],
    flowerImage: "./images/BadFlowey.jpeg",
    flowerAnswer: "You look so tasty...",
  },
];

function displayQuestion() {
  questionText.innerText = questionsArray[counter].question;
  flowerImg.src = questionsArray[counter].flowerImage;
  welcomeMsg.innerText = questionsArray[counter].flowerAnswer;

  for (let i = 0; i < questionsArray[counter].answer.length; i++) {
    buttons[i].innerText = questionsArray[counter].answer[i];
  }
}

function listenStep1Buttons() {
  buttons.forEach(
    (btn) =>
      (btn.onclick = () => {
        counter++;
        if (counter < questionsArray.length) displayQuestion();
        else {
          setupRunningGame();
        }
      })
  );
}

function doStep1() {
  counter = 0;
  displayQuestion();
  listenStep1Buttons();
}

function doStep2() {
  counter = 0;
  setupRunningGame();
}

function setupRunningGame() {
  questionsAnswerBlock.remove();
  welcomeMsg.innerText = "GOT YOU !";
  setTimeout(prepareRunningGame, 2000);
  //setTimeout(rainAudioBackground, 9000);
  //loadingScreenRules();
  setTimeout(makeEnvironnement, 2000);
  //settimeout makeenvironnement 8980
  //settimeout la fonction pour les ennemys
  divHidden.innerHTML = "Run while you can...";
}

function setTime() {
  if (!pauseTimer) {
    ++totalSeconds;
    secondsLabel.innerText = pad(totalSeconds % 60);
    minutesLabel.innerText = pad(parseInt(totalSeconds / 60));
  } else {
    secondsLabel.innerText = pad(totalSeconds % 60);
    minutesLabel.innerText = pad(parseInt(totalSeconds / 60));
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function makeEnvironnement() {
  countHP = 3;
  score.style.visibility = "visible";
  hp.style.visibility = "visible";
  appearMonsters();
  monstersMoving();
  totalSeconds = 0;
  secondsLabel.innerText = "00";
  minutesLabel.innerText = "00";
  timer;
  asgorr.addEventListener("mouseover", mouseOnMonsters);
  sans.addEventListener("mouseover", mouseOnMonsters);
  papyrus.addEventListener("mouseover", mouseOnMonsters);
  flowey.addEventListener("mouseover", mouseOnMonsters);
}

function appearMonsters() {
  asgorr.style.visibility = "visible";
  sans.style.visibility = "visible";
  papyrus.style.visibility = "visible";
  flowey.style.visibility = "visible";
}

function monstersMoving() {
  papyrusMove();
  asgorrMove();
  sansMove();
  floweyMove();
}

function papyrusMove() {
  papyrus.style.transform = "translateY(85px)";
  papyrus.style.transform = "translateX(85px)";
}

function asgorrMove() {
  asgorr.style.transform = "translateY(85px)";
  asgorr.style.transform = "translateX(85px)";
}

function sansMove() {
  sans.style.transform = "translateY(85px)";
  sans.style.transform = "translateX(85px)";
}

function floweyMove() {
  flowey.style.transform = "translateY(85px)";
  flowey.style.transform = "translateX(85px)";
}

function mouseOnMonsters() {
  countHP--;
  if (countHP === 0) {
    hp.removeChild(hp.lastElementChild);
    pauseTimer = true;
    gameIsLost();
  } else {
    hp.removeChild(hp.lastElementChild);
  }
}

function gameIsLost() {
  gameLost.style.visibility = "visible";
  audio.pause();
  //defeatAudio.play();
  removeListenerMonster();
  yesContinue.addEventListener("click", continueGame);
  noContinue.addEventListener("click", noContinueGame);
}

function removeListenerMonster() {
  asgorr.removeEventListener("mouseover", mouseOnMonsters);
  sans.removeEventListener("mouseover", mouseOnMonsters);
  papyrus.removeEventListener("mouseover", mouseOnMonsters);
  flowey.removeEventListener("mouseover", mouseOnMonsters);
}

function noContinueGame() {
  gameOverMsg.innerText = "GAME OVER";
  yesContinue.style.visibility = "hidden";
  noContinue.style.visibility = "hidden";
  restartMsg.innerText = "The monsters have caught your soul !";
}

function continueGame() {
  pauseTimer = false;
  gameLost.style.visibility = "hidden";
  makeEnvironnement();

  var countheart = 3;
  for (let i = 0; i < countheart; i++) {
    console.log("here");
    let heart = document.createElement("img");
    heart.id = "one-heart";
    heart.src = "./images/heart.jpg";
    hp.appendChild(heart);
  }
}

function prepareRunningGame() {
  flowerImg.remove();
  divHidden.remove();
  welcomeMsg.remove();
  document.body.classList.add("Background-Animation");
}

// function loadingScreenRules() {
//   //loading image + sentence
//   divHidden.innerText = "Loading... Nah joke";
//   //mettre image skeleton
// }

function rainAudioBackground() {
  rainAnimation.style.visibility = "visible";
  audio.play();
}

function startStep1() {
  questionsAnswerBlock.style.visibility = "visible";
  sentenceToLoad.innerHTML = "";
  doStep1();
  document.removeEventListener("keydown", startStep1);
}

document.onload = setTimeout(function () {
  sentenceToLoad.style.visibility = "visible";
  document.addEventListener("keydown", doStep2);
}, 1500);
