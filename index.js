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


// step1
//remove le keydown
//afficher la question courante
//ecouter les listenners bouttons

function showQuestion() {
  questionText.innerText = questionsArray[counter].question;
  flowerImg.src = questionsArray[counter].flowerImage;
  welcomeMsg.innerText = questionsArray[counter].flowerAnswer;
  console.log(counter);

  for (let i = 0; i < questionsArray[counter].answer.length; i++) {
    buttons[i].innerText = questionsArray[counter].answer[i];
  }
  if (counter === questionsArray.length - 1) return setupRunningGame();

  buttons.forEach((button) =>
    button.addEventListener("click", () => showQuestion(counter++))
  );
}

function setupRunningGame() {
  console.log("out of if");
  questionsAnswerBlock.style.visibility = "hidden";
  divHidden.innerHTML = "Run while you can...";
  welcomeMsg.innerText = "GOT YOU !";
  //hide border question
  //showw the message run while you can
  //adapt the background
  //lauch the music !
}

document.onload = setTimeout(function () {
  sentenceToLoad.style.visibility = "visible";
  document.addEventListener("keydown", function () {
    questionsAnswerBlock.style.visibility = "visible";
    sentenceToLoad.innerHTML = "";
    showQuestion(0);
  });
}, 1500);
