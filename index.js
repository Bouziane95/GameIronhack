const clickBtn = document.getElementById("chest");
const divHidden = document.getElementById("hiddenMsg");
const floweyImg = document.getElementById("floweyImg");
const welcomeMsg = document.getElementById("welcomeMessage");
const sentenceToLoad = document.getElementById("sentenceToLoad");
const questionsAnswerBlock = document.getElementById("QAContainer");
const questions = document.getElementById("questionDiv");
const answer = document.getElementById("childrenDiv");
let buttons = document.querySelectorAll(".littlechildrenDiv");

document.getElementById("message").innerHTML = "Hey, look at this treasure ! Click on it :D";

var questionsObject = {
    question: "test1",
    answers: [{
            text: "bon"
        },
        {
            text: "mauvais"
        },
        {
            text: "mauvais"
        },
        {
            text: "mauvais"
        }
    ],
    question: "test2",
    answers: [{
            text: "bonnn"
        },
        {
            text: "mauvaissss"
        },
        {
            text: "mauvaisss"
        },
        {
            text: "mauvaisss"
        }
    ]
};

function showQuestion(question) {
    questions.innerText = question.question;
    for (let i = 0; i < question.answers.length; i++) {
        buttons[i].innerText = question.answers[i].text;
        buttons[i].addEventListener("click", selectAnswer);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    console.log(selectedButton);
    // welcomeMsg.innerText = "oh nice";

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
        showQuestion(questionsObject);

    });
}, 1500);