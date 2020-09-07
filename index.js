const clickBtn = document.getElementById("chest");
const divHidden = document.getElementById("hiddenMsg");
const welcomeMsg = document.getElementById("welcomeMessage");
const sentenceToLoad = document.getElementById("sentenceToLoad");
const questionsAnswerBlock = document.getElementById("QAContainer");
const questionText = document.getElementById("questionDiv");
const answerText = document.getElementById("childrenDiv");
const flowerImg = document.getElementById("FloweyImg");
let buttons = document.querySelectorAll(".littlechildrenDiv");
let counter = 0;

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

function setupRunningGame() {
  console.log("out of if");
  questionsAnswerBlock.style.visibility = "hidden";
  divHidden.innerHTML = "Run while you can...";
  welcomeMsg.innerText = "GOT YOU !";

  //adapt the background
  //lauch the music !
}

function startStep1() {
  questionsAnswerBlock.style.visibility = "visible";
  sentenceToLoad.innerHTML = "";
  doStep1();
  document.removeEventListener("keydown", startStep1);
}

document.onload = setTimeout(function () {
  sentenceToLoad.style.visibility = "visible";
  document.addEventListener("keydown", startStep1);
}, 1500);
