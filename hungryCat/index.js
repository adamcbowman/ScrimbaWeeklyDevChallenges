//woooo JS!
const catEl = document.querySelector('#cat');
const fishEl = document.querySelector('#fish');

function getHungry() {
    catEl.classList.remove('fed');
    catEl.classList.add('hungry');
    
}

function getFed() {
    catEl.classList.remove('hungry');
    catEl.classList.add('fed');
}

catEl.addEventListener('click', getHungry);
fishEl.addEventListener('click', getFed);

