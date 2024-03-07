let timerInterval = null; // Initialize timerInterval to null

let language = 'it';
let length = 5;
let score = 0;
sessionStorage.setItem('score', score);

// Get the input elements
const inputs = document.querySelectorAll('input[type="button"]');
const wordInput = document.getElementById('wordInput');
const scoreDisplay = document.getElementById('scoreDisplay');

let checkWord = () => {
    if (wordInput.value.toUpperCase() === extractedWord.toUpperCase()) {
        alert('Hai indovinato!'); // TODO: Replace with some css effect

        updateScore();
        newWord();
    } else {
        alert('Riprova!'); // TODO: Replace with some css effect
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
            // Clear the wordInput
            wordInput.value = '';
        } else if (value === '➡') {
            checkWord();
            wordInput.value = '';
        } else {
            wordInput.value += value;
        }
    });
});

function updateScore() {
    score++;
    sessionStorage.setItem('score', score);
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
            
            // You can add code here to handle what happens when the timer runs out
            alert('Time is up!'); // TODO: Replace with some css effect
            
            newWord(); // Generate a new word
            startTimer(); // Restart the timer
        }
    }, 1000);
}

newWord();