const buttonParent = document.querySelector('.button-parent');
const settingsLabel = document.querySelector('.settings-label');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

let settings = 1;

buttonParent.addEventListener('click', () => {
    getSettings(settingsLabel.textContent);

    window.location = "../Pages/Game.html"
});

rightArrow.addEventListener('click', () => {
    if(settings === 1){
           settings = 2;
    }
    else if (settings === 2){
        settings = 1;
    }

    updateLabel()
})

leftArrow.addEventListener('click', () =>{
    if(settings === 1){
        settings = 2;
    }
    else if (settings === 2){
        settings = 1;
    }

    updateLabel()
})

function updateLabel(){
    if (settings == 1 ){
        settingsLabel.textContent = 'Tastiera';
    }
    else {
        settingsLabel.textContent = 'Dragon';
    }
}

$('.speaker').click(function(e) {
    e.preventDefault();
  
      $(this).toggleClass('mute');
  });