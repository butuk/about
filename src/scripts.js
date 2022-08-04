"use strict";
const headline = document.querySelector('.headline');
const reset = document.querySelector('.reset');
const ux = document.querySelector('.ux-ui');
const trainer = document.querySelector('.trainer');
const help = document.querySelector('.can-help');
const graduated = document.querySelector('.graduated');

ux.addEventListener('click', () => {
    ux.classList.add('hidden');
    help.classList.remove('hidden');
    reset.classList.remove('hidden');
    headline.classList.add('hidden');
  }
)

trainer.addEventListener('click', () => {
    trainer.classList.add('hidden');
    graduated.classList.remove('hidden');
    reset.classList.remove('hidden');
    headline.classList.add('hidden');
})

//const clickable = document.querySelectorAll('.clickable');

// Dynamic favicon
const iconPlace = document.getElementById('favicon');
document.body.addEventListener('click', () => {
    let icon = Math.round(Math.random() * 19) + 1;
    iconPlace.setAttribute(`href`, `icons/${icon}.png`);
});

/*clickable.forEach(element => {
    element.addEventListener('click', () => {
        reset.classList.remove('hidden');
        headline.classList.add('hidden');
        element.nextElementSibling.classList.remove('hidden');
        element.classList.add('hidden');
    });
});*/


// Reset to default state
reset.addEventListener('click', () => {
    reset.classList.toggle('hidden');
    headline.classList.toggle('hidden');
    /*document.querySelectorAll('span').forEach(element => {
        element.classList.add('hidden');
    });*/
    help.classList.add('hidden');
    graduated.classList.add('hidden');
    ux.classList.remove('hidden');
    trainer.classList.remove('hidden');
});
