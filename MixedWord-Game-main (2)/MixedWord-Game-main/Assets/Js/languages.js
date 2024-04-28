const buttonParent = document.querySelector('.button-parent');
const languageLabel = document.querySelector('.language-label');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
let language = "it";

onload = () => {
    const language = sessionStorage.setItem('language', 'it');
};

buttonParent.addEventListener('click', () => {
    getLanguage(languageLabel.textContent);

    window.location = "../Pages/Settings.html"
});

rightArrow.addEventListener('click', () => {
    if(language === "en")
        language = "it";
    else
        language = "en";
    updateLabel();
});

leftArrow.addEventListener('click', () => {
    if(language === "en")
        language = "it";
    else
        language = "en";
    updateLabel();
});

function updateLabel() {
    if(language === "en"){
        languageLabel.textContent = "English";
        sessionStorage.setItem('language', 'en');
    }
    else{
        languageLabel.textContent = "Italian";
        sessionStorage.setItem('language', 'it');
    }
}

function getLanguage(lang) {
    if(lang === "English")
        language = "en";
    else
        language = "it";
}