//import array from resources   
import {english} from './resources/english.js';
import {medicine} from './resources/medicine.js';




//get elements
const question = document.getElementById("question");
const quiz = document.getElementsByClassName("container")[0];
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
/////////////////////////////////////////////////
const startEnglish = document.getElementById("startEnglish");
const startMedicine = document.getElementById("startMedicine");
const startTechnology = document.getElementById("startTechnology");
const startMovies = document.getElementById("startMovies");
const startMaths = document.getElementById("startMaths");
const startPhysics = document.getElementById("startPhysics");
const startChemistry = document.getElementById("startChemistry");
const startGeology = document.getElementById("startGeology");
////////////////////////////////////////////////
const img = document.getElementById("img");
const nav = document.getElementsByClassName("nav-bar")[0];
const page = document.getElementById("current-page");
const progress = document.getElementById("progress");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("scoreContainer");
const input = document.getElementsByClassName("input-field")[0];
const buttons = document.getElementById("btn-gp");



const miniTimer = document.getElementsByClassName("mini-timer")[0];
const introBtn = document.getElementById("intro-start");
const intro = document.getElementsByClassName("intro")[0];
const body = document.getElementsByTagName("body")[0];
const bars = document.getElementById("bars");
const sidePanel = document.getElementById("mysidePanel");
const list = document.getElementsByTagName("li")[0];
const label = document.getElementsByClassName("custom-control-label")[0];
const cross = document.getElementById("cross");
const row = document.getElementsByClassName("row")[0];
const about = document.getElementById("ques");
const disable_abt = document.getElementById("disable_about");
const about_title = document.getElementById("about_title");

const header = document.getElementsByClassName("header")[0];
//for dark mode
const intro_textOne = document.querySelector(".intro-text.one");
const intro_textTwo = document.querySelector(".intro-text.two");
const intro_textThree = document.querySelector(".intro-text.three");

const intro_paraOne = document.querySelector(".intro-para.one");
const intro_paraTwo = document.querySelector(".intro-para.two");
const intro_paraThree = document.querySelector(".intro-para.three");

//developemnt mode spinner
const spinner = document.getElementsByClassName("spinner-border")[0];
const devTest = document.getElementsByClassName("devText")[0];
const home = document.getElementById("home");

//app info
const about_info = document.getElementsByClassName("about-info");

//create some variable
const lastQuestion = english.length-1;

let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth/questionTime;
let TIMER;
let score = 0;
// development mode
const inDev = () => {
    spinner.style.display = "block";
    input.style.display = "none";
    buttons.style.display = "none";
    page.innerHTML = "Quiz";
    devTest.style.display = "block";
    home.style.display = "block";
}
//about us
about.addEventListener("click",function(){
    about_title.style.display = "block";
    home.style.display = "block";
    buttons.style.display = "none";
    page.innerHTML = "About us";
    input.style.display = "none";
    spinner.style.display = "none";
    devTest.style.display = "none";
    scoreDiv.style.display = "none";

});
//render question
const renderQuestion = (category) => {
    console.log(category);
    let q =category[runningQuestion];

    question.innerHTML = "<p>" +q.question +"</p>";
    img.innerHTML = "<img src = "+q.img+">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
//start button
introBtn.addEventListener("click",function(){
    input.style.display = "block";
    buttons.style.display = "block";
    intro.style.display = "none";
    nav.style.display = "block";
});
//sidepanel open
bars.addEventListener("click",function(){
    sidePanel.style.width = "160px";
});
//sidepanel close
cross.addEventListener("click",function(){
    sidePanel.style.width = "0";
});

//start on click category
startEnglish.addEventListener("click",() => {
    startQuiz(english);
});
startMedicine.addEventListener("click",() => {
    startQuiz(medicine);
});
startTechnology.addEventListener("click",() => {
    inDev();
});
startMovies.addEventListener("click",() => {
    inDev();
});
startPhysics.addEventListener("click",() => {
    inDev();
});
startChemistry.addEventListener("click",() => {
    inDev();
});
startChemistry.addEventListener("click",() => {
    inDev();
});
startGeology.addEventListener("click",() => {
    inDev();
});
//
function startQuiz(category){
    page.innerHTML = "Quiz";
    buttons.style.display = "none";
    input.style.display = "none";
    renderQuestion(category);
    window.hehe = category;
    quiz.style.display = "block";
    disable_abt.style.display = "none";
    
    renderProgress(category);

    renderCounter(category);
    
    TIMER = setInterval(function(){
        renderCounter(category);
    },1000);
}




const renderProgress = (category) => {
    console.log(category);

    for(let index = 0; index < category.length; index++){
        
        progress.innerHTML += "<div class='prog' id="+index+"> </div>";

    }
}

const renderCounter = (category) => {

    if(count <= questionTime){
        counter.innerHTML = count;
        miniTimer.innerHTML = count;
        timeGauge.style.width = count*gaugeUnit +"px";
        count++;
    }else{ 
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion(category);
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }

}

const answerIsWrong = () => {
  document.getElementById(runningQuestion).style.backgroundColor = "red";
}

const answerIsCorrect = () => {
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}
choiceA.addEventListener("click",function(){
    checkAnswer("A",window.hehe);
})
choiceB.addEventListener("click",function(){
    checkAnswer("B",window.hehe);
})
choiceC.addEventListener("click",function(){
    checkAnswer("C",window.hehe);
})
choiceD.addEventListener("click",function(){
    checkAnswer("D",window.hehe);
})
const checkAnswer = (answer,category) => {

    if(answer == category[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
    runningQuestion++;
    renderQuestion(category);
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}


const scoreRender = () => {
    disable_abt.style.display = "block";
    page.innerHTML = "Score";
    const name = document.getElementById("name").value;
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    const scorePercent = Math.round(100*score/window.hehe.length);
    scoreDiv.innerHTML = "<p> Hello, " + "<b>"+    name.toUpperCase()+"</b> <br>"+"Result : "+"<b>"+score + "/" + window.hehe.length+"</b> <br>Your score percent is <b>"+scorePercent+" %</b> </p>";
    home.style.display = "block";

}

//click and reload page
    home.addEventListener("click",function(){
        window.location.reload();
    });
    

//dark mode
const checkBox = document.getElementsByClassName("custom-control-input")[0];
checkBox.addEventListener("click",function(){
    if(checkBox.checked){

        window.localStorage.setItem('theme','dark');


    }else if(!checkBox.checked){

        window.localStorage.setItem('theme','light');

    }

    if(localStorage.getItem('theme') === 'dark'){
        darkTheme();
    }else if(localStorage.getItem('theme') === 'light'){
        lightTheme();
    }

});
//function darkmode
const darkTheme = () => {
    body.style.backgroundColor = "#171C27";
    sidePanel.style.backgroundColor = "#171C27";
    list.style.color = "white";
    label.style.color = "white";
    cross.style.color = "white";
    nav.style.backgroundColor = "black";
    page.style.color = "white";
    bars.style.color = "white";
    row.style.backgroundColor = "#171C27";
    choiceA.style.backgroundColor = "#171C27";
    choiceC.style.backgroundColor = "#171C27";
    choiceB.style.backgroundColor = "#171C27";
    choiceD.style.backgroundColor = "#171C27";
    choiceA.style.border = "1px solid green";
    choiceB.style.border = "1px solid green";
    choiceC.style.border = "1px solid green";
    choiceD.style.border = "1px solid green";
    choiceA.style.color = "white";
    choiceB.style.color = "white";
    choiceC.style.color = "white";
    choiceD.style.color = "white";
    question.style.color = "white";
    scoreDiv.style.color = "white";
    devTest.style.color = "white";
    home.style.color = "white";
    for(var f = 0; f <about_info.length; f++){
        about_info[f].style.color = "white";
    }

}

const lightTheme = () => {
    body.style.backgroundColor = "#fffcfc";
    sidePanel.style.backgroundColor = "white";
    list.style.color = "black";
    label.style.color = "black";
    cross.style.color = "black";
    nav.style.backgroundColor = "white";
    page.style.color = "black";
    bars.style.color = "black";
    row.style.backgroundColor = "white";
    choiceA.style.backgroundColor = "white";
    choiceB.style.backgroundColor = "white";
    choiceC.style.backgroundColor = "white";
    choiceD.style.backgroundColor = "white";
    choiceA.style.color = "black";
    choiceB.style.color = "black";
    choiceC.style.color = "black";
    choiceD.style.color = "black";
    question.style.color = "black";
    scoreDiv.style.color = "black";
    devTest.style.color = "black";
    home.style.color = "black";
    for(var f = 0; f <about_info.length; f++){
        about_info[f].style.color = "black";
    }
}
//check theme in localstorage 
window.addEventListener('load', () => {
    if(window.localStorage.getItem('theme') === 'dark') {
       darkTheme();
       checkBox.checked = true;
       body.style.backgroundColor = "#171C27";

    } 
    if (window.localStorage.getItem('theme') === 'light') {
       lightTheme();    
       header.style.color = "black";
       intro_textOne.style.backgroundColor = "midnightblue";
       intro_textTwo.style.backgroundColor = "midnightblue";
       intro_textThree.style.backgroundColor = "midnightblue";

       intro_paraOne.style.color = "white";
       intro_paraTwo.style.color = "white";
       intro_paraThree.style.color = "white";
    }

});