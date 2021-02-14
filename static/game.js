'use strict'

// buttons
const allMainBtns = document.querySelectorAll('.main-btn');
const allAnswerBtns = document.querySelectorAll('.answer-btn');
const lvlBtns = document.querySelectorAll('.lvl-btn');
const [newGameBtn, rankListBtn] = document.querySelectorAll('button');
const exitButton = document.querySelector(".exit-btn");
const allInputsAnswers = document.querySelectorAll('.input-answer')

// containers
const lvlContainer = document.querySelector('.lvls-container');
const modalContainer = document.querySelector('.modal');
const blurContainer = document.querySelector(".blur-background");

// classes
const overMainBtnClass = 'over-main-btn';
const overLvlBtnClass = 'over-lvl-btn';
const overExitBtn = 'over-exit-btn';
const overAnswerBtnClass = 'over-answer-btn';
const chosenAnswerBtn = 'input-answer:checked + label';


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

const chosenAnswer = function (className, arrayName) {
        for (let i = 0; i < arrayName.length; i++) {
            arrayName[i].addEventListener("click", function () {
                arrayName[i].classList.toggle(className)
            })
        }
}


// handling buttons
const btnHandler = function () {
    listenMouseOver(overMainBtnClass, allMainBtns);
    listenMouseOver(overLvlBtnClass, lvlBtns);
    listenMouseOver(overExitBtn, [exitButton]);
    listenMouseOver(overAnswerBtnClass, allAnswerBtns)
    showHideOnClick(newGameBtn, lvlContainer);
    chosenAnswer(chosenAnswerBtn, allAnswerBtns)
    for (let i = 0; i < lvlBtns.length; i++) {
        showOnClick(lvlBtns[i], modalContainer);
    }
    hideOnClick(exitButton, modalContainer);
}


// main
function initGame() {
    btnHandler()
}

initGame();
