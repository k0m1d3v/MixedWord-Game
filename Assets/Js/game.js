let timerInterval = null; // Initialize timerInterval to null
let language = sessionStorage.getItem('language');
let score = 0;
let life = sessionStorage.getItem('life');
let highscore = sessionStorage.getItem('highscore');

let lifeLabel = document.querySelector('.lifeLabel');

window.onload = function() {
    for (let i = 0; i < life; i++) {
        lifeLabel.innerHTML += '❤️';
    }
    document.getElementById('maxScore').innerHTML = highscore;
}

let difficulty = sessionStorage.getItem('difficulty');
switch (difficulty) {
    case 'Easy':
        length = 4;
        break;
    case 'Medium':
        length = 6;
        break;
    case 'Hard':
        length = 8;
        break;
    default:
        length = 6;
};

sessionStorage.setItem('score', score);

// Get the input elements
const inputs = document.querySelectorAll('input[type="button"]');
const wordInput = document.getElementById('wordInput');
const scoreDisplay = document.getElementById('scoreDisplay');
let checkWord = () => {
    let messageElement = document.querySelector('.message');
    let lifeLabel = document.querySelector('.lifeLabel');

    if (wordInput.value.toUpperCase() === extractedWord.toUpperCase()) {
        messageElement.textContent = 'Correct!';
        messageElement.style.color = 'lightgreen';
        updateScore();
        newWord();
    } else {
        messageElement.textContent = 'Wrong!';
        messageElement.style.color = 'red';
        life--;
        lifeLabel.innerHTML = ''; // Clear the current hearts
        for (let i = 0; i < life; i++) {
            lifeLabel.innerHTML += '❤️'; // Add the remaining hearts
        }
        if (life === 0) {
            messageElement.textContent = 'Game Over!';
            messageElement.style.color = 'red';
            clearInterval(timerInterval);
            sessionStorage.setItem('score', 0);
            setTimeout(() => {
                window.location.href = 'gameOver.html';
            }, 2000);
        }
    }
}
function shuffle(extractedWord) {
    let parola = extractedWord;
    let output = '';
    let l = parola.length;
    let ll = l;
    const parolArray = [];
    for (let i = 0; i < l; i++) {
        parolArray[i] = parola.at(i);
    }
    for (let i = 0; i < l; i++) {
        let num = Math.floor(Math.random() * ll);
        output += parolArray[num].toUpperCase();
        parolArray.splice(num, 1);
        ll--;
    }
    if (output.toUpperCase() != parola.toUpperCase()) {
        document.getElementById("wordShuffled").value = output;
        console.log(parola + " --> " + output); // DEBUG
    } else {
        shuffle(extractedWord);
    }
}
function randWord(ling,lunghezza){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        let parola = JSON.parse(this.responseText);
        sessionStorage.setItem('word',parola);
       }
    xmlhttp.open("GET", "https://www.defio.info/REST/lingue/entrambe.php?lingua="+ling+"&lun="+lunghezza);
    xmlhttp.send();
}
// Add event listener to each input
inputs.forEach(input => {
    input.addEventListener('click', event => {
        // Get the button value
        const value = input.value;
        
        // Check for specific button values
        if (value === '❌') {
            wordInput.value = '';
        } else if (value === '➡') {
            checkWord();
            wordInput.value = '';
        } else if (value === '⬅') {
            wordInput.value = wordInput.value.slice(0, -1);
        } else {
            wordInput.value += value;
        }
    });
});
function updateScore() {
    score+= 100;
    sessionStorage.setItem('score', score);
    if (score > highscore) {
        sessionStorage.setItem('highscore', score);
        document.getElementById('maxScore').innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}
function newWord() {
    randWord(language, length);
    extractedWord = sessionStorage.getItem('word');
    shuffle(extractedWord);
    startTimer();
}
let timeLeft = 60; // Set the initial time (in seconds)
// Get the HTML element where you want to display the timer
const timerElement = document.getElementById('timer'); 
function startTimer() {
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timeLeft = 60; // Reset the time
    // Update the timer every second
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Stop the timer when it reaches 0
            
            messageElement.textContent = "Time's up!";
            messageElement.style.color = 'orange';
            // wait 2 seconds
            setTimeout(() => {
                messageElement.textContent = 'Word is changing...';
            }, 1500);

            messageElement.textContent = '';
            newWord();
             // Generate a new word
            startTimer(); // Restart the timer
        }
    }, 1000);
}
newWord();