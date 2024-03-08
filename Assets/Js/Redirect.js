document.getElementById("Play-Btn").addEventListener("click", redirectPlay);
document.getElementById("Team-Btn").addEventListener("click", redirectTeam);
document.getElementById("Journal-Btn").addEventListener("click", redirectJournal);

function redirectPlay(){
    window.location = "Pages\\Game.html"; 
}

function redirectTeam(){
    window.location = "..\\Pages\\Team.html"
}

function redirectJournal(){
    window.location = "..\\Pages\\Journal.html"
}