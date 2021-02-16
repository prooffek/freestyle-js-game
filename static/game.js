'use strict'

// buttons
const allMainBtns = document.querySelectorAll('.main-btn');
const allAnswerBtns = document.querySelectorAll('.answer-btn');
const lvlBtns = document.querySelectorAll('.lvl-btn');
const [newGameBtn, rankListBtn] = document.querySelectorAll('button');
const exitButton = document.querySelector(".exit-btn");
// const allInputsAnswers = document.querySelectorAll('.input-answer');
const answersContainer = document.querySelectorAll('.answers-container');
const checkBtn = document.querySelector(".check-btn")

// containers
const lvlContainer = document.querySelector('.lvls-container');
const modalContainer = document.querySelector('.modal');
const blurContainer = document.querySelector(".blur-background");

// classes
const overMainBtnClass = 'over-main-btn';
const overLvlBtnClass = 'over-lvl-btn';
const overExitBtn = 'over-exit-btn';
const overAnswerBtnClass = 'over-answer-btn';
const chosenAnswerBtn = 'input-answer:checked+label';


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

const checkAnswer = function () {
    checkBtn.addEventListener("click", function () {
        let selectedBtn = document.querySelector(`.${chosenAnswerBtn}`);
        selectedBtn.classList.remove(chosenAnswerBtn);

        if (answersContainer[0].dataset.correctAnswer === selectedBtn.textContent) {
            selectedBtn.style.backgroundColor = "green";
        } else {
            selectedBtn.style.backgroundColor = "red";
            let siblingAnswers = selectedBtn.parentElement.children;

            for (let i = 0; i < siblingAnswers.length; i++) {
                if (siblingAnswers[i].textContent === answersContainer[0].dataset.correctAnswer) {
                    siblingAnswers[i].style.backgroundColor = "green";
                }
            }

            checkBtn.textContent = "Next Question"
        }
    })
}

// handling buttons
const btnHandler = function () {
    listenMouseOver(overMainBtnClass, allMainBtns);
    listenMouseOver(overLvlBtnClass, lvlBtns);
    listenMouseOver(overExitBtn, [exitButton]);
    listenMouseOver(overAnswerBtnClass, allAnswerBtns)
    showHideOnClick(newGameBtn, lvlContainer);
    // chosenAnswer(chosenAnswerBtn, allAnswerBtns)
    for (let i = 0; i < lvlBtns.length; i++) {
        showOnClick(lvlBtns[i], modalContainer);
    }
    hideOnClick(exitButton, modalContainer);
    checkAnswer()
}


// const checkAnswer = function () {
//
// }

// main
function initGame() {
    btnHandler()
}

initGame();
