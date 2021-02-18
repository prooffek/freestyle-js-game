'use strict'

let easyLvl = 0;
let mediumLvl = 1;
let misticLvl = 2;
let currentQuestion = 1;
let maxCountQuestion = 3;
let questionIndex = 0
let questionNum;
let playedLvlDict;
let correctAnswer;
let greenbtn;

//HTML elements
const questionTitle = document.getElementById("question-title");
const questionContent = document.getElementById("question-content");
const answersContainerNew = document.querySelector(".answers-container");
let inputEl = document.querySelectorAll("input");
let labelEl = document.querySelectorAll("label");

// buttons
const allMainBtns = document.querySelectorAll('.main-btn');
const allAnswerBtns = document.querySelectorAll('.answer-btn');
const lvlBtns = document.querySelectorAll('.lvl-btn');
const [newGameBtn] = document.querySelectorAll('button');
const rankListBtn = document.getElementById("ranking-list");
const exitButton = document.querySelector(".exit-btn");
// const allInputsAnswers = document.querySelectorAll('.input-answer');
const answersContainer = document.querySelectorAll('.answers-container');
const checkBtn = document.querySelector(".check-btn");
const nextBtn = document.querySelector(".next-btn");
let selectedBtn;

// containers
const lvlContainer = document.querySelector('.lvls-container');
const modalContainer = document.querySelector('.modal');
const blurContainer = document.querySelector(".blur-background");
const checkContainer = document.querySelector(".submit-container");
const nextQuestionContainer = document.querySelector(".next-container");
const mainQuestionContainer = document.querySelector("main");
const tableContainer = document.querySelector('.table-container');

// classes
const overMainBtnClass = 'over-main-btn';
const overLvlBtnClass = 'over-lvl-btn';
const overExitBtn = 'over-exit-btn';
const overAnswerBtnClass = 'over-answer-btn';
const chosenAnswerBtn = 'input-answer:checked+label';

//questions and answers for different levels
// const objectForLvl1 = mainQuestionContainer.dataset.lvl1;

// Listen functions
const listenMouseOver = function (className, arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        arrayName[i].addEventListener("mouseover", function () {
            arrayName[i].classList.add(className);
        })
        arrayName[i].addEventListener("mouseout", function () {
            arrayName[i].classList.remove(className);
        })
    }
}

const showHideOnClick = function (buttonEl, container) {
    buttonEl.addEventListener("click", function () {
       container.classList.toggle('hidden');
    });
}

const showOnClick = function (btnEl, container) {
    btnEl.addEventListener("click", function () {
       container.classList.remove('hidden');
       blurBackground();

       if (btnEl === lvlBtns[easyLvl]) {
           playedLvlDict = lvl1;
       } else if (btnEl === lvlBtns[mediumLvl]) {
           playedLvlDict = lvl2;
       } else if (btnEl === lvlBtns[misticLvl]) {
           playedLvlDict = lvl3;
       }

       showQuestion(playedLvlDict);
    });
    // if (container === modalContainer) blurBackground();
}

const hideOnClick = function (btnEl, container) {
    btnEl.addEventListener("click", function () {
       container.classList.add('hidden');
       blurBackground();
    });
    // if (container === modalContainer) blurBackground();
}

const blurBackground = function () {
    blurContainer.classList.toggle('hidden');
}

const listenNextQuestionBtn = function () {
    nextBtn.addEventListener("click", function () {
        nextQuestion();
        showQuestion(playedLvlDict);
    })
}

const lisenCheckAnswerBtn = function () {
    checkBtn.addEventListener("click", function () {
        checkAnswer();
    })
}

const createAnswerBtns = function () {
    for (let i = 0; i < random_keys_list[questionIndex].length; i++) {

        //adding input elements to HTML
        let para = document.createElement("input");
        para.setAttribute("type", "radio");
        para.setAttribute("class", "input-answer")
        answersContainerNew.appendChild(para);

        //adding labels to HTML
        let para2 = document.createElement("label");
        para2.setAttribute("class", "answer-btn")
        answersContainerNew.appendChild(para2)
    }
}

const addAnswerAttributes = function () {
    inputEl = document.querySelectorAll("input");
    labelEl = document.querySelectorAll("label");

    for (let i = 0; i < inputEl.length; i++) {
        let key = random_keys_list[questionIndex][i]
        let answerNum = i + 1
        inputEl[i].setAttribute("value", `Answer-${answerNum}`)
        inputEl[i].setAttribute("id", `q${questionNum}-answer${answerNum}`)
        inputEl[i].setAttribute("name", `answers${questionNum}`)
        labelEl[i].setAttribute("for", `q${questionNum}-answer${answerNum}`)
        labelEl[i].textContent = playedLvlDict[questionIndex][key]
    }
}

const showQuestion = function () {
    questionNum = questionIndex + 1;
    correctAnswer = playedLvlDict[questionIndex].good_answer;
    questionTitle.textContent = `Pytanie ${questionNum}`;
    questionContent.textContent = playedLvlDict[questionIndex].content;

    if (document.querySelectorAll("input").length === 0) createAnswerBtns()
    addAnswerAttributes()
}

// const chosenAnswer = function (className, arrayName) {
//         for (let i = 0; i < arrayName.length; i++) {
//             if (answersContainer[0].dataset.correctAnswer === arrayName[i].textContent) {
//                 console.log(`click!${i}`)
//                 arrayName[i].addEventListener("click", function () {
//                     arrayName[i].style.backgroundColor = "aqua";
//                 })
//                 // arrayName[i].addEventListener("click", function () {
//                 //     allAnswerBtns[i].classList.toggle(className)
//                 // })
//             }
//         }
// }
// }
const checkAnswer = function () {
        selectedBtn = document.querySelectorAll(`.${chosenAnswerBtn}`)[0];
        // let selectedBtn = selectedBtnArrey[questionIndex]
        // console.log(selectedBtn)
        // selectedBtn.classList.remove(chosenAnswerBtn);
        // questionIndex = mainQuestionContainer.dataset.questionIndex;

       if (!selectedBtn) {
           return
       } else if (correctAnswer === selectedBtn.textContent) {
            selectedBtn.style.backgroundColor = "green";
        } else {
            selectedBtn.style.backgroundColor = "red";

            let siblingAnswers = selectedBtn.parentElement.children;
            for (let i = 0; i < siblingAnswers.length; i++) {
                if (siblingAnswers[i].textContent === correctAnswer) {
                    greenbtn = siblingAnswers[i];
                    greenbtn.style.backgroundColor = "green";
                }
            }
        }
        // selectedBtn.checked = false
        checkBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        listenNextQuestionBtn();
        questionIndex++;
}

const removeBtnColors = function () {
    selectedBtn.style.backgroundColor = null;
    if (greenbtn) greenbtn.style.backgroundColor = null;
}

const nextQuestion = function () {
    let nextIdQuestion = currentQuestion + 1
    if (nextIdQuestion <= maxCountQuestion) {

        // let divCurrentQuestion = document.getElementById(currentQuestion.toString());
        // let divNextQuestion = document.getElementById(nextIdQuestion.toString());
        //
        // currentQuestion++;
        // divCurrentQuestion.classList.add("hidden");
        // divNextQuestion.classList.remove("hidden");
        checkBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
        // lisenCheckAnswerBtn();
        removeBtnColors()
    }
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

// handling buttons
const btnHandler = function () {
    listenMouseOver(overMainBtnClass, allMainBtns);
    listenMouseOver(overLvlBtnClass, lvlBtns);
    // listenMouseOver(overExitBtn, [exitButton]);
    listenMouseOver(overAnswerBtnClass, allAnswerBtns);
    showHideOnClick(newGameBtn, lvlContainer);
    showHideOnClick(rankListBtn, tableContainer);
    // chosenAnswer(chosenAnswerBtn, allAnswerBtns)
    for (let i = 0; i < lvlBtns.length; i++) {
        showOnClick(lvlBtns[i], modalContainer);
    }
    // hideOnClick(exitButton, modalContainer);
    lisenCheckAnswerBtn();
}




// const checkAnswer = function () {
//
// }

// main
function initGame() {

    btnHandler()


}

initGame();
