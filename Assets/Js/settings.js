// Language checker
const enFlag = document.getElementById("englishFlag");
const itFlag = document.getElementById("italianFlag");

enFlag.addEventListener('click', function() {
    sessionStorage.setItem('language', 'en');
});

itFlag.addEventListener('click', function() {
    sessionStorage.setItem('language', 'it');
});


// Difficulty checker
const difficultyLabel = document.querySelector(".difficulty-label");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
let counter = 0;

document.onload = function() {
    sessionStorage.setItem('difficulty', 'easy');
}

leftArrow.addEventListener('click', function() {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    switch (counter) {
        case 0:
            difficultyLabel.innerHTML = "Easy";
            sessionStorage.setItem('difficulty', 'easy');
            break;
        case 1:
            difficultyLabel.innerHTML = "Medium";
            sessionStorage.setItem('difficulty', 'medium');
            break;
        case 2:
            difficultyLabel.innerHTML = "Hard";
            sessionStorage.setItem('difficulty', 'hard');
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
    window.location.href = "Game.html";
});