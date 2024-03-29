function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeText(){

    const lightMode = 'light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}


const darkModeClass = 'dark-mode';
const button = document.getElementById('btn-selector');
const h1 = document.getElementById('titulo');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode)

 