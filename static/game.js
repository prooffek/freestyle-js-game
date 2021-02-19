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
let pointscount = 0;
let deltaPoints = 0;

//HTML elements
// const menuEl = document.querySelector("menu");
const questionTitle = document.getElementById("question-title");
const questionContent = document.getElementById("question-content");
const answersContainerNew = document.querySelector(".answers-container");
let inputEl = document.querySelectorAll("input");
let labelEl = document.querySelectorAll("label");

// buttons
const allMainBtns = document.querySelectorAll('.main-btn');
const lvlBtns = document.querySelectorAll('.lvl-btn');
const [newGameBtn] = document.querySelectorAll('button');
const rankListBtn = document.getElementById("ranking-list");
// const exitButton = document.querySelector(".exit-div");
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
const endQuizContainer = document.querySelector(".end-quiz")
const questionContainer = document.querySelector(".question-container")
const tableContainer = document.querySelector('.table-container');

// classes
const overMainBtnClass = 'over-main-btn';
const overLvlBtnClass = 'over-lvl-btn';
const overExitBtnClass = 'over-exit-btn';
const overAnswerBtnClass = 'over-answer-btn';
const chosenAnswerBtn = 'input-answer:checked+label';
// const mainBtnClass = "main-btn";
// const lvlBtnClass = "lvl-btn";
// const exitBtnClass = "exit-img";

// // Arrays
// const mouseOverArray = [[menuEl, mainBtnClass, overMainBtnClass],
//                         [menuEl, lvlBtnClass, overLvlBtnClass],
//                         [exitButton, exitBtnClass, overExitBtnClass]];

// const newMouseOver = function (parentEl, elClass, overBtnClass) {
//     parentEl.addEventListener("mouseover", function (event) {
//         if (event.target.classList.contains(elClass)) event.target.classList.add(overBtnClass);
//     })
//     parentEl.addEventListener("mouseout", function (event) {
//         if (event.target.classList.contains(elClass)) event.target.classList.remove(overBtnClass);
//     })
// }

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
           deltaPoints = 1;
       } else if (btnEl === lvlBtns[mediumLvl]) {
           playedLvlDict = lvl2;
           deltaPoints = 3;
       } else if (btnEl === lvlBtns[misticLvl]) {
           playedLvlDict = lvl3;
           deltaPoints = 5;
       }

       showQuestion(playedLvlDict);
    });
    // if (container === modalContainer) blurBackground();
}

const hideOnClick = function (btnEl, container) {
    btnEl.addEventListener("click", function () {
       container.classList.add('hidden');
       blurBackground();

       if (btnEl === exitButton) {
           questionIndex = 0;
           pointscount = 0;
           removeBtnColors();
           shuffle(playedLvlDict);
           shuffle(random_keys_list);
        }
    })
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
        answersContainerNew.appendChild(para2);
    }
}

const addAnswerAttributes = function () {
    inputEl = document.querySelectorAll("input");
    labelEl = document.querySelectorAll("label");
    listenMouseOver(overAnswerBtnClass, labelEl);

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

const showQuestion = function () {
    questionNum = questionIndex + 1;
    correctAnswer = playedLvlDict[questionIndex].good_answer;
    questionTitle.textContent = `Pytanie ${questionNum}`;
    questionContent.textContent = playedLvlDict[questionIndex].content;

    if (document.querySelectorAll("input").length === 0) createAnswerBtns();
    addAnswerAttributes();
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
        // selectedBtn.checked = false
        checkBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        listenNextQuestionBtn();
        questionIndex++;
}

const removeBtnColors = function () {
    if (selectedBtn) selectedBtn.style.backgroundColor = null;
    if (greenbtn) greenbtn.style.backgroundColor = null;
    inputEl.forEach(el => el.checked = false);
}

const nextQuestion = function () {
    let nextIdQuestion = currentQuestion + 1;
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
        removeBtnColors();
    }
    if (currentQuestion === maxCountQuestion) {
        questionContainer.classList.add("hidden");
        checkBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        endQuizContainer.classList.remove("hidden");
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

const shuffle = function (arrey) {
    for (let tour = 0; tour < Math.floor(Math.random() * (6 + 1)); tour++) {
        for (let i = arrey.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrey[i], arrey[j]] = [arrey[j], arrey[i]];
        }
    }
    return arrey;
}

// handling buttons
const btnHandler = function () {
    // mouseOverArray.forEach( function (el) {
    //     let [parentEl, elClass, overBtnClass] = el;
    //     newMouseOver(parentEl, elClass, overBtnClass);
    // })

    listenMouseOver(overMainBtnClass, allMainBtns);
    listenMouseOver(overLvlBtnClass, lvlBtns);
    listenMouseOver(overExitBtn, [exitButton]);
    showHideOnClick(newGameBtn, lvlContainer);
    showHideRanking(rankListBtn, tableContainer);
    // chosenAnswer(chosenAnswerBtn, allAnswerBtns)
    for (let i = 0; i < lvlBtns.length; i++) {
        showOnClick(lvlBtns[i], modalContainer);
    }
    hideOnClick(exitButton, modalContainer);
    lisenCheckAnswerBtn();
}




// const checkAnswer = function () {
//
// }

// main
function initGame() {

    btnHandler();


}

initGame();
