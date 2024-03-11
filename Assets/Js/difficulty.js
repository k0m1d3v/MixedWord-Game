document.getElementById("easy-button").addEventListener("click", redirectEasy);
document.getElementById("medium-button").addEventListener("click", redirectMedium);
document.getElementById("hard-button").addEventListener("click", redirectHard);

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
