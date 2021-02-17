'use strict'

let currentQuestion = 1;
let maxCountQuestion = 3;
let questionIndex = 0

// buttons
const allMainBtns = document.querySelectorAll('.main-btn');
const allAnswerBtns = document.querySelectorAll('.answer-btn');
const lvlBtns = document.querySelectorAll('.lvl-btn');
const [newGameBtn, rankListBtn] = document.querySelectorAll('button');
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
const mainQuestionContainer = document.querySelector("main")

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

const listenNextQuestionBtn = function () {
    nextBtn.addEventListener("click", function () {
        nextQuestion();
    })
}

const lisenCheckAnswerBtn = function () {
    checkBtn.addEventListener("click", function () {
        checkAnswer();

    })
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
        selectedBtn = document.querySelectorAll(`.${chosenAnswerBtn}`)[questionIndex];
        // let selectedBtn = selectedBtnArrey[questionIndex]
        // console.log(selectedBtn)
        // selectedBtn.classList.remove(chosenAnswerBtn);
        // questionIndex = mainQuestionContainer.dataset.questionIndex;

       if (!selectedBtn) {
           return
       } else if (answersContainer[questionIndex].dataset.correctAnswer === selectedBtn.textContent) {
            selectedBtn.style.backgroundColor = "green";
        } else {
            selectedBtn.style.backgroundColor = "red";
            let siblingAnswers = selectedBtn.parentElement.children;

            for (let i = 0; i < siblingAnswers.length; i++) {
                if (siblingAnswers[i].textContent === answersContainer[questionIndex].dataset.correctAnswer) {
                    siblingAnswers[i].style.backgroundColor = "green";
                }
            }
        }
        // selectedBtn.checked = false
        checkBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        listenNextQuestionBtn();
        questionIndex++


}

const nextQuestion = function () {
    let nextIdQuestion = currentQuestion + 1
    if (nextIdQuestion <= maxCountQuestion) {

        let divCurrentQuestion = document.getElementById(currentQuestion.toString());
        let divNextQuestion = document.getElementById(nextIdQuestion.toString());

        currentQuestion++;
        divCurrentQuestion.classList.add("hidden");
        divNextQuestion.classList.remove("hidden");
        checkBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
        lisenCheckAnswerBtn();

    }



}

// handling buttons
const btnHandler = function () {
    listenMouseOver(overMainBtnClass, allMainBtns);
    listenMouseOver(overLvlBtnClass, lvlBtns);
    listenMouseOver(overExitBtn, [exitButton]);
    listenMouseOver(overAnswerBtnClass, allAnswerBtns);
    showHideOnClick(newGameBtn, lvlContainer);
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

    btnHandler()


}

initGame();
