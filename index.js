const divHidden = document.getElementById("hiddenMsg");
const welcomeMsg = document.getElementById("welcomeMessage");
const sentenceToLoad = document.getElementById("sentenceToLoad");
const questionsAnswerBlock = document.getElementById("QAContainer");
const questionText = document.getElementById("questionDiv");
const answerText = document.getElementById("childrenDiv");
const flowerImg = document.getElementById("FloweyImg");
let buttons = document.querySelectorAll(".littlechildrenDiv");
let counter = 0;
var audio = new Audio("./musics/megalovania.mp3");
let rainAnimation = document.getElementById("Rain-Video");
let groundLine = document.getElementById("lvl-line");
let heroGround = document.getElementById("hero-ground");
let hero = document.getElementById("hero");
let score = document.getElementById("Score");
var posX = hero.getBoundingClientRect().right;

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
  divHidden.innerHTML = "Run while you can...";
  welcomeMsg.innerText = "GOT YOU !";
  setTimeout(prepareRunningGame, 2000);
  //setTimeout(rainAudioBackground, 9000);
  //loadingScreenRules();
  setTimeout(makeEnvironnement, 2000);
  //settimeout makeenvironnement 8980
  //settimeout la fonction pour les ennemys
}

function makeEnvironnement() {
  heroGround.style.visibility = "visible";
  score.style.visibility = "visible";
  document.addEventListener("keydown", heroAction);
}

function appearMonsters() {
  //Faire apparaitre les monstres
}

function heroAction(evt) {

  if (evt.code == "Space") {
    heroJump();
  } else if (evt.code == "ArrowRight") {
    heroRight();
  } else if (evt.code == "ArrowLeft") {
    heroLeft();
  }
}

function heroJump() {
  hero.style.background = "url(./images/hero.png)";
  var posY = 60;
  var isAscending = true;
  var id = setInterval(frame, 1);

  function frame() {
    if (isAscending && posY >= 260) {
      isAscending = false;
    } else {
      if (isAscending) posY += 2;
      else posY -= 2;
      hero.style.bottom = posY + "px";
      if (!isAscending && posY === 60) clearInterval(id);
    }
  }
}

function heroRight() {
  hero.style.background = "url(./images/rightHero.jpg)";
  console.log(document.body.offsetWidth);
  console.log(posX);
  if (posX === document.body.offsetWidth) return;
  posX += 20;
  hero.style.left = posX + "px";
  hero.style.bottom = 60 + "px";
}

function heroLeft() {
  hero.style.background = "url(./images/leftHero.jpg)";
  console.log(pos);
  console.log(document.body.offsetWidth);
  if (pos === document.body.offsetWidth - hero.offsetWidth) return;
  pos += 20;
  hero.style.right = pos + "px";
  hero.style.bottom = 60 + "px";
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
