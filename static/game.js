'use strict'

let easyLvl = 0;
let mediumLvl = 1;
let misticLvl = 2;
let maxCountQuestion;
let questionIndex = 0;
let questionNum;
let playedLvlDict;
let correctAnswer;
let greenbtn;
let pointscount = 0;
let deltaPoints = 0;
let nextIdQuestion;

//HTML elements
const menuEl = document.querySelector("menu");
const questionTitle = document.getElementById("question-title");
const questionContent = document.getElementById("question-content");
const answersContainerNew = document.querySelector(".answers-container");
const scoreInformation = document.querySelector("#score");
const scoreInputHidden = document.getElementById("score");
let inputEl;
let labelEl;


// buttons
const lvlBtns = document.querySelectorAll('.lvl-btn');
const [newGameBtn] = document.querySelectorAll('button');
const rankListBtn = document.getElementById("ranking-list");
const exitButton = document.querySelector(".exit-div");
const checkBtn = document.querySelector(".check-btn");
const nextBtn = document.querySelector(".next-btn");
let selectedBtn;
const addScoreBtn = document.querySelector(".add-score");
const endQuizBtn = document.querySelector(".end-btn");

// containers
const lvlContainer = document.querySelector('.lvls-container');
const modalContainer = document.querySelector('.modal');
const blurContainer = document.querySelector(".blur-background");
const checkContainer = document.querySelector(".submit-container");
const endQuizContainer = document.querySelector(".end-quiz")
const questionContainer = document.querySelector(".question-container")
const tableContainer = document.querySelector('.table-container');

// classes
const overMainBtnClass = 'over-main-btn';
const overLvlBtnClass = 'over-lvl-btn';
const overExitBtnClass = 'over-exit-btn';
const overAnswerBtnClass = 'over-answer-btn';
const chosenAnswerBtn = 'input-answer:checked+label';
const mainBtnClass = "main-btn";
const lvlBtnClass = "lvl-btn";
const exitBtnClass = "exit-img";
const answerBtnClass = "answer-btn";

// Arrays
const mouseOverArray = [[menuEl, mainBtnClass, overMainBtnClass],
                        [menuEl, lvlBtnClass, overLvlBtnClass],
                        [exitButton, exitBtnClass, overExitBtnClass]];

/////////////////////////////////////////////////////////////////////////////////////////////
// Listen functions
const newMouseOver = function (parentEl, elClass, overBtnClass) {
    parentEl.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains(elClass)) event.target.classList.add(overBtnClass);
    })
    parentEl.addEventListener("mouseout", function (event) {
        if (event.target.classList.contains(elClass)) event.target.classList.remove(overBtnClass);
    })
}

const showHideOnClick = function (buttonEl, container) {
    buttonEl.addEventListener("click", function () {
       container.classList.toggle('hidden');
    });
}

const lisenCheckAnswerBtn = function () {
    checkBtn.addEventListener("click", function () {
        checkAnswer();
    })
}

const listenNextQuestionBtn = function () {
    nextBtn.addEventListener("click", function () {
        nextQuestion();
        if (questionNum < maxCountQuestion) showQuestion(playedLvlDict);
    })
}

const lisenAddScoreBtn = function (score) {
    addScoreBtn.addEventListener("click", function () {
        let saveScoreInput = document.getElementById("save-score");
        saveScoreInput.setAttribute("value", pointscount);
        addScore()
    })
}

function showHideRanking(elbtn, container){
    elbtn.addEventListener('click',function (){
        if (container.style.display ==="none"){
        container.style.display = "block";
    }else{
        container.style.display = "none";
    }
    })
}

const showOnClick = function (btnEl, container) {
    btnEl.addEventListener("click", function () {
       container.classList.remove('hidden');
       blurBackground();
       establishGameQuestions(btnEl)
       maxCountQuestion = playedLvlDict.length;
       showQuestion(playedLvlDict);
    });
}

const exitOnClick = function (btnEl, container) {
    btnEl.addEventListener("click", function () {
       closeModalAndRestartCounters(container)
    })
}

const lisenEndQuizBtn = function () {
    endQuizBtn.addEventListener("click", function () {
        endQuiz()
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////
//Functions inside listeners
const establishGameQuestions = function (btnEl) {
    if (btnEl === lvlBtns[easyLvl]) {
           playedLvlDict = lvl1;
           deltaPoints = 1;
       } else if (btnEl === lvlBtns[mediumLvl]) {
           playedLvlDict = lvl2;
           deltaPoints = 3;
       } else if (btnEl === lvlBtns[misticLvl]) {
           playedLvlDict = lvl3;
           deltaPoints = 5;
       }
}

const closeModalAndRestartCounters = function (container) {
    container.classList.add('hidden');
    blurBackground();
    questionIndex = 0;
    pointscount = 0;
    removeBtnColors();
    shuffle(playedLvlDict);
    shuffle(random_keys_list);
    nextIdQuestion = 0;
    questionContainer.classList.remove("hidden");
    checkBtn.classList.remove("hidden");
    checkContainer.classList.remove("hidden");
    endQuizContainer.classList.add("hidden");
}

const blurBackground = function () {
    blurContainer.classList.toggle('hidden');
}

const removeBtnColors = function () {
    if (selectedBtn) selectedBtn.style.backgroundColor = null;
    if (greenbtn) greenbtn.style.backgroundColor = null;
    inputEl.forEach(el => el.checked = false);
}

const shuffle = function (arrey) {
    for (let tour = 0; tour < Math.floor(Math.random() * (6 + 1)); tour++) {
        for (let i = arrey.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrey[i], arrey[j]] = [arrey[j], arrey[i]];
        }
    }
    return arrey;
}

const checkAnswer = function () {
        selectedBtn = document.querySelectorAll(`.${chosenAnswerBtn}`)[0];

       if (!selectedBtn) {
           return
       } else if (correctAnswer === selectedBtn.textContent) {
            selectedBtn.style.backgroundColor = "rgba(0, 255, 120, 0.7)";
            pointscount += deltaPoints;
            console.log(pointscount);
        } else {
            selectedBtn.style.backgroundColor = "rgba(255, 0, 0, 0.7)";

            let siblingAnswers = selectedBtn.parentElement.children;
            for (let i = 0; i < siblingAnswers.length; i++) {
                if (siblingAnswers[i].textContent === correctAnswer) {
                    greenbtn = siblingAnswers[i];
                    greenbtn.style.backgroundColor = "rgba(0, 255, 120, 0.7)";
                }
            }
        }
                if (questionNum < maxCountQuestion) {
            checkBtn.classList.add("hidden");
            nextBtn.classList.remove("hidden");
            listenNextQuestionBtn();
            questionIndex++;
        } else if (questionNum === maxCountQuestion) {
            checkBtn.classList.add("hidden");
            endQuizBtn.classList.remove("hidden");
            lisenEndQuizBtn();

    }
}


const nextQuestion = function () {
    // nextIdQuestion = questionIndex + 1;
    checkBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    removeBtnColors();
}

const addScore = function (score) {
    scoreInputHidden.setAttribute("value", score)
}

function endQuiz() {
    questionContainer.classList.add("hidden");
    checkBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
    checkContainer.classList.add("hidden");
    endQuizBtn.classList.add("hidden")
    scoreInformation.textContent = `Zdobyłeś ${pointscount} punktów`;
    endQuizContainer.classList.remove("hidden");
    lisenAddScoreBtn();
}

/////////////////////////////////////////////////////////////////////////////////////////////
//Show questions on page
const showQuestion = function () {
    questionNum = questionIndex + 1;
    correctAnswer = playedLvlDict[questionIndex].good_answer;
    questionTitle.textContent = `Pytanie ${questionNum}`;
    questionContent.textContent = playedLvlDict[questionIndex].content;

    if (document.querySelectorAll(".input-answer").length === 0) createAnswerBtns();
    addAnswerAttributes();
}

const createAnswerBtns = function () {
    for (let i = 0; i < random_keys_list[questionIndex].length; i++) {

        //adding input elements to HTML
        let para = document.createElement("input");
        para.setAttribute("type", "radio");
        para.setAttribute("class", "input-answer");
        answersContainerNew.appendChild(para);

        //adding labels to HTML
        let para2 = document.createElement("label");
        para2.setAttribute("class", answerBtnClass);
        answersContainerNew.appendChild(para2);
    }
}

const addAnswerAttributes = function () {
    inputEl = document.querySelectorAll(".input-answer");
    labelEl = document.querySelectorAll("label");
    newMouseOver(answersContainerNew, answerBtnClass, overAnswerBtnClass);

    for (let i = 0; i < inputEl.length; i++) {
        let key = random_keys_list[questionIndex][i]
        let answerNum = i + 1
        inputEl[i].setAttribute("value", `Answer-${answerNum}`);
        inputEl[i].setAttribute("id", `q${questionNum}-answer${answerNum}`);
        inputEl[i].setAttribute("name", `answers${questionNum}`);
        labelEl[i].setAttribute("for", `q${questionNum}-answer${answerNum}`);
        labelEl[i].textContent = playedLvlDict[questionIndex][key];
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
// handling buttons
const btnHandler = function () {
    mouseOverArray.forEach( function (el) {
        let [parentEl, elClass, overBtnClass] = el;
        newMouseOver(parentEl, elClass, overBtnClass);
    })

    showHideOnClick(newGameBtn, lvlContainer);
    showHideRanking(rankListBtn, tableContainer);

    for (let i = 0; i < lvlBtns.length; i++) {
        showOnClick(lvlBtns[i], modalContainer);
    }
    exitOnClick(exitButton, modalContainer);
    lisenCheckAnswerBtn();
}

/////////////////////////////////////////////////////////////////////////////////////////////
// main
function initGame() {

    btnHandler();


}

initGame();
