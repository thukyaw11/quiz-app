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
const introBtn = document.getElementById("intro-start");
const intro = document.getElementsByClassName("intro")[0];
const body = document.getElementsByTagName("body")[0];


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
//create some variable
const lastQuestion = english.length-1;

let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth/questionTime;
let TIMER;
let score = 0;
body.style.backgroundColor = "midnightblue";

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
    body.style.backgroundColor =  "white";
})
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
