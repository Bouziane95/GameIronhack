const clickBtn = document.getElementById("chest");
const divHidden = document.getElementById("hiddenMsg");
const floweyImg = document.getElementById("floweyImg");
const welcomeMsg = document.getElementById("welcomeMessage");
const sentenceToLoad = document.getElementById("sentenceToLoad");
const questionsAnswerBlock = document.getElementById("QAContainer");
const questionText = document.getElementById("questionDiv");
const answerText = document.getElementById("childrenDiv");
let buttons = document.querySelectorAll(".littlechildrenDiv");
let counter = 0;

document.getElementById("message").innerHTML = "Hey, look at this treasure ! Click on it :D";

var questionsArray = [

    {
        question: "question 1",
        answer: ["rep1", "rep2", "rep3", "rep4"]
    },
    {
        question: "question 2",
        answer: ["rep11", "rep22", "rep33", "rep44"]
    }
];

function showQuestion(index) {
    questionText.innerText = questionsArray[index].question;

    for (let i = 0; i < questionsArray[index].answer.length; i++) {
        buttons[i].innerText = questionsArray[index].answer[i];
    }

    counter++;
    buttons.forEach((button) => button.addEventListener("click", () => showQuestion(counter)));
}

clickBtn.addEventListener("click", function () {
    divHidden.innerHTML = "Run while you can...";
    document.getElementById("message").innerHTML = "GOT YOU !"
    floweyImg.src = "./images/BadFlowey.jpeg"
    clickBtn.src = ""
});

document.onload = setTimeout(function () {
    sentenceToLoad.style.visibility = "visible";
    document.addEventListener("keydown", function () {
        questionsAnswerBlock.style.visibility = "visible";
        sentenceToLoad.innerHTML = "";
        showQuestion(0);
    });
}, 1500);