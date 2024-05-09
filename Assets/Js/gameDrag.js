let timerInterval = null; // Inizializza timerInterval a null
let language = sessionStorage.getItem('language');
let score = 0;
let life = sessionStorage.getItem('life');
let highscore = sessionStorage.getItem('highscore');

let messageElement = document.querySelector('.message');
let lifeLabel = document.querySelector('.lifeLabel');

window.onload = function() {
    for (let i = 0; i < life; i++) {
        lifeLabel.innerHTML += '❤️';
    }
    document.getElementById('maxScore').innerHTML = highscore;
}

let length; // Dichiarazione della variabile length

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

// Shuffle the word
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
        const letters = output.split('');
        const container = document.querySelector('.drag-container');
        container.innerHTML = '';
        letters.forEach(letter => {
            const div = document.createElement('div');
            div.textContent = letter;
            div.classList.add('draggable');
            container.appendChild(div);
        });
        console.log(parola + " --> " + output); // DEBUG
    } else {
        shuffle(extractedWord);
    }
}

// Randomic word
function randWord(ling,lunghezza){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        let parola = JSON.parse(this.responseText);
        sessionStorage.setItem('word',parola);
    }
    xmlhttp.open("GET", "https://www.defio.info/REST/lingue/entrambe.php?lingua="+ling+"&lun="+lunghezza);
    xmlhttp.send();
}

function updateScore() {
    score+= 100;
    sessionStorage.setItem('score', score);
    if (score > highscore) {
        sessionStorage.setItem('highscore', score);
        document.getElementById('maxScore').innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}

let draggables = document.querySelectorAll('.draggable');

function newWord() {
    randWord(language, length);
    extractedWord = sessionStorage.getItem('word');
    correctWord = extractedWord;
    shuffle(extractedWord);
    startTimer();
    draggables = document.querySelectorAll('.draggable');
    attachEventListeners();
}

let timeLeft = 60; // Imposta il tempo iniziale (in secondi)
const timerElement = document.getElementById('timer'); // Ottieni l'elemento HTML dove vuoi visualizzare il timer

function startTimer() {
    // Cancella qualsiasi timer esistente
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timeLeft = 60; // Reimposta il tempo
    // Aggiorna il timer ogni secondo
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

// Drag and drop
let previousDiv = null;

draggables.forEach(draggable => {
    draggable.addEventListener('click', function() {
        if (previousDiv) {
            const temp = this.innerHTML;
            this.innerHTML = previousDiv.innerHTML;
            previousDiv.innerHTML = temp;
            previousDiv = null;
        } else {
            previousDiv = this;
        }
    });
});


// check word
const checkBtn = document.querySelector('.saveButton');
checkBtn.addEventListener('click', function() {
    const currentOrder = Array.from(draggables).map(draggable => draggable.innerHTML).join('');

    console.log(currentOrder);
    console.log(correctWord);

    if (currentOrder === correctWord.toUpperCase()) {
        messageElement.textContent = 'Correct!';
        messageElement.style.color = 'green';
        updateScore();
        newWord();
    } else {
        messageElement.textContent = 'Wrong!';
        messageElement.style.color = 'red';
    }
});

function attachEventListeners() {
    let draggables = document.querySelectorAll('.draggable');
    draggables.forEach(draggable => {
        draggable.addEventListener('click', function() {
            if (previousDiv) {
                const temp = this.innerHTML;
                this.innerHTML = previousDiv.innerHTML;
                previousDiv.innerHTML = temp;
                previousDiv = null;
            } else {
                previousDiv = this;
            }
        });
    });
}

attachEventListeners();