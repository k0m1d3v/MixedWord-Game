document.getElementById("easy-button").addEventListener("click", redirectEasy);
document.getElementById("medium-button").addEventListener("click", redirectMedium);
document.getElementById("hard-button").addEventListener("click", redirectHard);
document.getElementById("italian-button").addEventListener("click", setItalian);
document.getElementById("english-button").addEventListener("click", setEnglish);


function redirectEasy(){
    sessionStorage.setItem("difficulty", "easy");
    window.location = "..\\Pages\\Game.html"
}

function redirectMedium(){
    sessionStorage.setItem("difficulty", "medium");
    window.location = "..\\Pages\\Game.html"
}

function redirectHard(){
    sessionStorage.setItem("difficulty", "hard");
    window.location = "..\\Pages\\Game.html"
}

function setItalian(){
    sessionStorage.setItem("language", "it");
}

function setEnglish(){
    sessionStorage.setItem("language", "en");
}