"use strict";
const reset = document.querySelector('.reset');
const trainer = document.querySelector('.trainer');
const graduated = document.querySelector('.graduated');
const ux = document.querySelector('.ux-ui');
const help = document.querySelector('.can-help');
const headline = document.querySelector('.headline');
const clickable = document.querySelectorAll('.clickable');
clickable.forEach(element => {
    element.addEventListener('click', () => {
        const nextBlock = element.nextElementSibling;
        nextBlock.classList.remove('hidden');
        nextBlock.style.animation = 'expand 300ms ease';
        reset.classList.remove('hidden');
        element.classList.add('hidden');
        headline.classList.add('hidden');
    });
});
reset.addEventListener('click', () => {
    headline.classList.remove('hidden');
    ux.classList.remove('hidden');
    trainer.classList.remove('hidden');
    help.classList.add('hidden');
    graduated.classList.add('hidden');
    reset.classList.add('hidden');
});
// Dynamic favicon
const iconPlace = document.getElementById('favicon');
document.body.addEventListener('click', () => {
    let icon = Math.round(Math.random() * 19) + 1;
    iconPlace.setAttribute(`href`, `icons/${icon}.png`);
});
