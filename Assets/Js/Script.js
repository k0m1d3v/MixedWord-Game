document.getElementById("Play-Btn").addEventListener("click", redirectPlay);
document.getElementById("Leaderboard-Btn").addEventListener("click", redirectLeaderboard);

function redirectPlay(){
    window.location = "..\\Pages\\Game.html"; 
}

function redirectLeaderboard(){
    window.location = "..\\Pages\\Leaderboard.html"
}