const buttonParent = document.querySelector('.button-parent');
const difficultyLabel = document.querySelector('.difficulty-label');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
let difficulty = 0;

buttonParent.addEventListener('click', () => {
    getDifficulty(difficultyLabel.textContent);

    window.location = "../Pages/Languages.html"
});

rightArrow.addEventListener('click', () => {
    if(difficulty === 3){
        difficulty = 0;
    }else{
        difficulty++;
    }
    updateLabel();
});

leftArrow.addEventListener('click', () => {
    if(difficulty === 0){
        difficulty = 3;
    }else{
        difficulty--;
    }
    updateLabel();
});

function updateLabel() {
    if (difficulty === 0) {
        difficultyLabel.textContent = 'base';
    } else if (difficulty === 1) {
        difficultyLabel.textContent = 'hard';
    } else {
        difficultyLabel.textContent = 'easy';
    }
}

function getDifficulty(diff) {
    if(diff === 'Medium'){
        sessionStorage.setItem('difficulty', 'Medium');
    }else if(diff === 'Hard'){
        sessionStorage.setItem('difficulty', 'Hard');
    }else{
        sessionStorage.setItem('difficulty', 'Easy');
    }
}