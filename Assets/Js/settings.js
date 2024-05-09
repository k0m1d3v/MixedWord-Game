// Language checker
const enFlag = document.getElementById("englishFlag");
const itFlag = document.getElementById("italianFlag");

enFlag.addEventListener('click', function() {
    sessionStorage.setItem('language', 'en');
});

itFlag.addEventListener('click', function() {
    sessionStorage.setItem('language', 'it');
});

document.onload = function() {
    sessionStorage.setItem('difficulty', 'easy');
    sessionStorage.setItem('life', 5);
    sessionStorage.setItem('inputType', 'onScreen');
    sessionStorage.setItem('language', 'it');
    sessionStorage.setItem('highscore', 0);
}

// Difficulty checker
const difficultyLabel = document.querySelector(".difficulty-label");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
let counter = 0;

leftArrow.addEventListener('click', function() {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    switch (counter) {
        case 0:
            difficultyLabel.innerHTML = "Easy";
            sessionStorage.setItem('difficulty', 'easy');
            sessionStorage.setItem('life', 5);
            break;
        case 1:
            difficultyLabel.innerHTML = "Medium";
            sessionStorage.setItem('difficulty', 'medium');
            sessionStorage.setItem('life', 4);
            break;
        case 2:
            difficultyLabel.innerHTML = "Hard";
            sessionStorage.setItem('difficulty', 'hard');
            sessionStorage.setItem('life', 2);
            break;
    }
});

rightArrow.addEventListener('click', function() {
    counter++;
    if (counter > 2) {
        counter = 0;
    }
    switch (counter) {
        case 0:
            difficultyLabel.innerHTML = "Easy";
            sessionStorage.setItem('difficulty', 'easy');
            sessionStorage.setItem('life', 5);
            break;
        case 1:
            difficultyLabel.innerHTML = "Medium";
            sessionStorage.setItem('difficulty', 'medium');
            sessionStorage.setItem('life', 4);
            break;
        case 2:
            difficultyLabel.innerHTML = "Hard";
            sessionStorage.setItem('difficulty', 'hard');
            sessionStorage.setItem('life', 2);
            break;
    }
});

// Input type checker
const toggleCheckbox = document.querySelector(".toggleCheckbox");
document.onload = function() {
    sessionStorage.setItem('inputType', 'onScreen');
    sessionStorage.setItem('life', 5);
}

toggleCheckbox.addEventListener('click', function() {
    if (toggleCheckbox.checked) {
        sessionStorage.setItem('inputType', 'Drag');
    } else {
        sessionStorage.setItem('inputType', 'OnScreen');
    }
});

// Confirm settings
const confirmButton = document.querySelector(".saveButton");
confirmButton.addEventListener('click', function() {
    if (sessionStorage.getItem('inputType') === 'Drag') {
        location.href = 'GameDrag.html';
    }else
        location.href = 'Game.html';
});