const clickBtn = document.getElementById("chest");
const divHidden = document.getElementById("hiddenMsg");
const floweyImg =  document.getElementById("floweyImg");
const welcomeMsg = document.getElementById("welcomeMessage");
const sentenceToLoad = document.getElementById("sentenceToLoad");
const questions = document.getElementById("questionDiv");
document.getElementById("message").innerHTML = "Hey, look at this treasure ! Click on it :D";

clickBtn.addEventListener("click", function(){
    divHidden.innerHTML = "Run while you can...";
    document.getElementById("message").innerHTML = "GOT YOU !"
    floweyImg.src = "./images/BadFlowey.jpeg"
    clickBtn.src = ""
});

document.onload = setTimeout(function(){
    sentenceToLoad.style.visibility = "visible";
    document.addEventListener("keydown", function(){
        questions.style.visibility = "visible";
        sentenceToLoad.innerHTML = "";
    });
}, 1500);









