const question = document.getElementById("question");
const quiz = document.getElementsByClassName("container")[0];
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
//
const startEnglish = document.getElementById("startEnglish");
const startMedicine = document.getElementById("startMedicine");
const startTechnology = document.getElementById("startTechnology");
//
const img = document.getElementById("img");
const nav = document.getElementsByClassName("nav-bar")[0];
const page = document.getElementById("current-page");
const progress = document.getElementById("progress");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("scoreContainer");
const input = document.getElementsByClassName("input-field")[0];
const buttons = document.getElementById("btn-gp");
const buttonA = document.getElementById("A");
const buttonB = document.getElementById("B");
const buttonC = document.getElementById("C");
const buttonD = document.getElementById("D");


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
const about_title = document.getElementById("about_title");

const header = document.getElementsByClassName("header")[0];

const intro_textOne = document.querySelector(".intro-text.one");
const intro_textTwo = document.querySelector(".intro-text.two");
const intro_textThree = document.querySelector(".intro-text.three");

const intro_paraOne = document.querySelector(".intro-para.one");
const intro_paraTwo = document.querySelector(".intro-para.two");
const intro_paraThree = document.querySelector(".intro-para.three");

const spinner = document.getElementsByClassName("spinner-border")[0];
const devTest = document.getElementsByClassName("devText")[0];
const home = document.getElementById("home");
//create an array to store ques,ans and img


//array for category
let english = [
    {
        question:"He ______ all of them.",
        img:"img/socialMedia.jpeg",
        choiceA:"went",
        choiceB:"listened",
        choiceC:"spoke",
        choiceD:"wanted",
        correct:"D"
    },
    {
        question:"______ are you mad? Because you are late!",
        img:"img/sorry.jpeg",
        choiceA:"Why",
        choiceB:"Who",
        choiceC:"What",
        choiceD:"Who",
        correct:"A"
    },
    {
        question:"The milk is ______ the refrigerator..",
        img:"img/tired.jpeg",
        choiceA:"to",
        choiceB:"at",
        choiceC:"on",
        choiceD:"in",
        correct:"D"
    },
    {
        question:"The wind ______ hard all night.",
        img:"img/speak.jpeg",
        choiceA:"blow",
        choiceB:"blew",
        choiceC:"blown",
        choiceD:"blowing",
        correct:"B"
    },
    {
        question:"You can't have your cake ______ eat it too.",
        img:"img/battel.jpeg",
        choiceA:"although",
        choiceB:"and",
        choiceC:"while",
        choiceD:"or",
        correct:"B"
    },
    {
        question:"I've ______ a terrible headache.",
        img:"img/cho.jpeg",
        choiceA:"have",
        choiceB:"gotten",
        choiceC:"got",
        choiceD:"has",
        correct:"C"
    },
    {
        question:"I'm sorry we are so late; our car ______ down on the highway.",
        img:"img/farmer.jpeg",
        choiceA:"broken",
        choiceB:"broke",
        choiceC:"break",
        choiceD:"breaks",
        correct:"B"
    },
    {
        question:"I'm surprised because rain was not ______ in the weather report.",
        img:"img/htet.png",
        choiceA:"predicted",
        choiceB:"predictable",
        choiceC:"prediction",
        choiceD:"predict",
        correct:"A"
    },
    {
        question:"You two are always fighting. Why can't you ______?",
        img:"img/money.jpeg",
        choiceA:"get down",
        choiceB:"get off",
        choiceC:"get through",
        choiceD:"get along",
        correct:"D"
    }


];
//array for medicine
let medicine = [
    {
        question:"What are blood cell shape like?",
        img:"img/money.jpeg",
        choiceA:"Eggs",
        choiceB:"Rectangle",
        choiceC:"Doughnuts",
        choiceD:"Tubes",
        correct:"C"
    },
    {
        question:"Which type of cell is found in the brain?",
        img:"img/money.jpeg",
        choiceA:"White blood cell",
        choiceB:"Neurons",
        choiceC:"Epithelial cell",
        choiceD:"Nerves",
        correct:"B"
    },
    {
        question:"What is the largest organ in the human body?",
        img:"img/money.jpeg",
        choiceA:"Heart",
        choiceB:"Liver",
        choiceC:"Kidney",
        choiceD:"Skin",
        correct:"D"
    },
    {
        question:"What is the largest bone in the body?",
        img:"img/money.jpeg",
        choiceA:"Scapula",
        choiceB:"Femur",
        choiceC:"Tarsal",
        choiceD:"None of the above",
        correct:"B"
    },
    {
        question:"How much blood does the human body contain?",
        img:"img/money.jpeg",
        choiceA:"5-6 liters",
        choiceB:"5-6 quarts",
        choiceC:"5-6 gallons",
        choiceD:"5-6 cups",
        correct:"B"
    },
    {
        question:"What is the average human body temperature?",
        img:"img/money.jpeg",
        choiceA:"96.8 deg F",
        choiceB:"98.6 deg F",
        choiceC:"86.9 deg F",
        choiceD:"68.8 deg F",
        correct:"B"
    },
    {
        question:"How many bones do babies have when they are born?",
        img:"img/money.jpeg",
        choiceA:"100-150",
        choiceB:"150-270",
        choiceC:"270-350",
        choiceD:"350-400",
        correct:"C"
    },
    {
        question:"How many bones are in the human skull?",
        img:"img/money.jpeg",
        choiceA:"18",
        choiceB:"22",
        choiceC:"34",
        choiceD:"48",
        correct:"B"
    },
    {
        question:"How many taste buds does the average human tongue have?",
        img:"img/money.jpeg",
        choiceA:"1,000",
        choiceB:"100,000",
        choiceC:"1,000,000",
        choiceD:"10,000",
        correct:"D"
    }
 
]

//array for technology
let technology = [
    {
        question:"What was the first emoticon ever used?",
        img:"img/money.jpeg",
        choiceA:"&#128512;",
        choiceB:"&#128578;",
        choiceC:"&#128577;",
        choiceD:"&#128539;",
        correct:"C"
    },
    {
        question:"Which type of cell is found in the brain?",
        img:"img/money.jpeg",
        choiceA:"White blood cell",
        choiceB:"Neurons",
        choiceC:"Epithelial cell",
        choiceD:"Nerves",
        correct:"B"
    },
    {
        question:"What is the largest organ in the human body?",
        img:"img/money.jpeg",
        choiceA:"Heart",
        choiceB:"Liver",
        choiceC:"Kidney",
        choiceD:"Skin",
        correct:"D"
    },
    {
        question:"What is the largest bone in the body?",
        img:"img/money.jpeg",
        choiceA:"Scapula",
        choiceB:"Femur",
        choiceC:"Tarsal",
        choiceD:"None of the above",
        correct:"B"
    },
    {
        question:"How much blood does the human body contain?",
        img:"img/money.jpeg",
        choiceA:"5-6 liters",
        choiceB:"5-6 quarts",
        choiceC:"5-6 gallons",
        choiceD:"5-6 cups",
        correct:"B"
    },
    {
        question:"What is the average human body temperature?",
        img:"img/money.jpeg",
        choiceA:"96.8 deg F",
        choiceB:"98.6 deg F",
        choiceC:"86.9 deg F",
        choiceD:"68.8 deg F",
        correct:"B"
    },
    {
        question:"How many bones do babies have when they are born?",
        img:"img/money.jpeg",
        choiceA:"100-150",
        choiceB:"150-270",
        choiceC:"270-350",
        choiceD:"350-400",
        correct:"C"
    },
    {
        question:"How many bones are in the human skull?",
        img:"img/money.jpeg",
        choiceA:"18",
        choiceB:"22",
        choiceC:"34",
        choiceD:"48",
        correct:"B"
    },
    {
        question:"How many taste buds does the average human tongue have?",
        img:"img/money.jpeg",
        choiceA:"1,000",
        choiceB:"100,000",
        choiceC:"1,000,000",
        choiceD:"10,000",
        correct:"D"
    }
 
]
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
}
//about us
about.addEventListener("click",function(){
    about_title.style.display = "block";
    buttons.style.display = "none";
    page.innerHTML = "About us";
    input.style.display = "none";
    spinner.style.display = "none";
    devTest.style.display = "none";

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
introBtn.addEventListener("click",function(){
    input.style.display = "block";
    buttons.style.display = "block";
    intro.style.display = "none";
    nav.style.display = "block";
})
bars.addEventListener("click",function(){
    sidePanel.style.width = "160px";
});
const closePanel = () => {
    sidePanel.style.width = "0";
}
startEnglish.addEventListener("click",function(){
    startQuiz(english);

});

startMedicine.addEventListener("click",function(){
    startQuiz(medicine);
});

startTechnology.addEventListener("click",function(){
    inDev();
    home.style.display = "block";
    home.addEventListener("click",function(){
        window.location.reload();
    });

})

function startQuiz(category){
    page.innerHTML = "Quiz";
    buttons.style.display = "none";
    input.style.display = "none";
    renderQuestion(category);
    window.hehe = category;
    quiz.style.display = "block";
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
buttonA.addEventListener("click",function(){
    checkAnswer("A",window.hehe);
})
buttonB.addEventListener("click",function(){
    checkAnswer("B",window.hehe);
})
buttonC.addEventListener("click",function(){
    checkAnswer("C",window.hehe);
})
buttonD.addEventListener("click",function(){
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
    page.innerHTML = "Score";
    const name = document.getElementById("name").value;
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    const scorePercent = Math.round(100*score/window.hehe.length);
    scoreDiv.innerHTML = "<p> Hello, " + "<b>"+    name.toUpperCase()+"</b> <br>"+"Result : "+"<b>"+score + "/" + window.hehe.length+"</b> <br>Your score percent is <b>"+scorePercent+" %</b> </p>";
    home.style.display = "block";
    home.addEventListener("click",function(){
        window.location.reload();
    });

}



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

function darkTheme() {
    body.style.backgroundColor = "#171C27";
    sidePanel.style.backgroundColor = "#171C27";
    list.style.color = "white";
    label.style.color = "white";
    cross.style.color = "white";
    nav.style.backgroundColor = "black";
    page.style.color = "white";
    bars.style.color = "white";
    row.style.backgroundColor = "#171C27";
    buttonA.style.backgroundColor = "#171C27";
    buttonB.style.backgroundColor = "#171C27";
    buttonC.style.backgroundColor = "#171C27";
    buttonD.style.backgroundColor = "#171C27";
    buttonA.style.border = "1px solid green";
    buttonB.style.border = "1px solid green";
    buttonC.style.border = "1px solid green";
    buttonD.style.border = "1px solid green";
    buttonA.style.color = "white";
    buttonB.style.color = "white";
    buttonC.style.color = "white";
    buttonD.style.color = "white";
    question.style.color = "white";
    scoreDiv.style.color = "white";


}

function lightTheme() {
    body.style.backgroundColor = "#fffcfc";
    sidePanel.style.backgroundColor = "white";
    list.style.color = "black";
    label.style.color = "black";
    cross.style.color = "black";
    nav.style.backgroundColor = "white";
    page.style.color = "black";
    bars.style.color = "black";
    row.style.backgroundColor = "white";
    buttonA.style.backgroundColor = "white";
    buttonB.style.backgroundColor = "white";
    buttonC.style.backgroundColor = "white";
    buttonD.style.backgroundColor = "white";
    buttonA.style.color = "black";
    buttonB.style.color = "black";
    buttonC.style.color = "black";
    buttonD.style.color = "black";
    question.style.color = "black";
    scoreDiv.style.color = "black";
}
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