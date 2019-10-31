const question = document.getElementById("question");
const quiz = document.getElementsByClassName("container")[0];
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const startEnglish = document.getElementById("startEnglish");
const startMedicine = document.getElementById("startMedicine");
const img = document.getElementById("img");
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

//create an array to store ques,ans and img
//array for category
let english = [
    {
        question:"What is the windiest month?",
        img:"img/socialMedia.jpeg",
        choiceA:"March",
        choiceB:"November",
        choiceC:"December",
        choiceD:"June",
        correct:"B"
    },
    {
        question:"I'm sorry, you will just have to ______.",
        img:"img/sorry.jpeg",
        choiceA:"wait",
        choiceB:"avoid",
        choiceC:"like",
        choiceD:"find",
        correct:"A"
    },
    {
        question:"They're tired ______ they worked for ten hours.",
        img:"img/tired.jpeg",
        choiceA:"or",
        choiceB:"however",
        choiceC:"when",
        choiceD:"because",
        correct:"D"
    },
    {
        question:"I will speak ______ Suzanne when I see her.",
        img:"img/speak.jpeg",
        choiceA:"around",
        choiceB:"at",
        choiceC:"in",
        choiceD:"to",
        correct:"D"
    },
    {
        question:"Where ______ the Battle of the Bulge?",
        img:"img/battel.jpeg",
        choiceA:"was",
        choiceB:"were",
        choiceC:"is",
        choiceD:"weren't",
        correct:"A"
    },
    {
        question:"Chocolate is my greatest ______.",
        img:"img/cho.jpeg",
        choiceA:"weak",
        choiceB:"weaken",
        choiceC:"weakness",
        choiceD:"weakly",
        correct:"C"
    },
    {
        question:"______ the war, most Italians were farmers.",
        img:"img/farmer.jpeg",
        choiceA:"Top",
        choiceB:"Before",
        choiceC:"From",
        choiceD:"In",
        correct:"B"
    },
    {
        question:"How old is our teacher(Sir Htet Wai Yan)?",
        img:"img/htet.png",
        choiceA:"24",
        choiceB:"23",
        choiceC:"18",
        choiceD:"30",
        correct:"A"
    },
    {
        question:"Do you have any money?",
        img:"img/money.jpeg",
        choiceA:"No, I don't have many",
        choiceB:"No, I does not",
        choiceC:"Yes, I have any",
        choiceD:"No, I have none",
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
        question:"What is blood cell shape like?",
        img:"img/money.jpeg",
        choiceA:"Eggs",
        choiceB:"Rectangle",
        choiceC:"Doughnuts",
        choiceD:"Tubes",
        correct:"C"
    },
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
        question:"What are blood cell shape like?",
        img:"img/money.jpeg",
        choiceA:"Eggs",
        choiceB:"Rectangle",
        choiceC:"Doughnuts",
        choiceD:"Tubes",
        correct:"C"
    },
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
        question:"What are blood cell shape like?",
        img:"img/money.jpeg",
        choiceA:"Eggs",
        choiceB:"Rectangle",
        choiceC:"Doughnuts",
        choiceD:"Tubes",
        correct:"C"
    },
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
        question:"What are blood cell shape like?",
        img:"img/money.jpeg",
        choiceA:"Eggs",
        choiceB:"Rectangle",
        choiceC:"Doughnuts",
        choiceD:"Tubes",
        correct:"C"
    },
    {
        question:"What are blood cell shape like?",
        img:"img/money.jpeg",
        choiceA:"Eggs",
        choiceB:"Rectangle",
        choiceC:"Doughnuts",
        choiceD:"Tubes",
        correct:"C"
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

startEnglish.addEventListener("click",function(){
    startQuiz(english);

});

startMedicine.addEventListener("click",function(){
    startQuiz(medicine);
})

function startQuiz(category){

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
    const name = document.getElementById("name").value;
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    const scorePercent = Math.round(100*score/window.hehe.length);
    scoreDiv.innerHTML = "<p> Hello, " + "<b>"+    name.toUpperCase()+"</b> <br>"+"Result : "+"<b>"+score + "/" + window.hehe.length+"</b> <br>Your score percent is <b>"+scorePercent+" %</b> </p>";
}
