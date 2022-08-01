const reset = document.querySelector('.reset');
const trainer = document.querySelector('.trainer');
const graduated = document.querySelector('.graduated');
const ux = document.querySelector('.ux-ui');
const help = document.querySelector('.can-help');
const headline = document.querySelector('.headline');
//const trained = document.querySelector('.trained');
ux.addEventListener('click', () => {
    help.classList.remove('hidden');
    ux.classList.add('hidden');
    reset.classList.remove('hidden');
    headline.classList.add('hidden');
});
trainer.addEventListener('click', ()=> {
    graduated.classList.remove('hidden');
    trainer.classList.add('hidden');
    reset.classList.remove('hidden');
    headline.classList.add('hidden');
});
reset.addEventListener('click', () => {
    help.classList.add('hidden');
    ux.classList.remove('hidden');
    graduated.classList.add('hidden');
    trainer.classList.remove('hidden');
    reset.classList.add('hidden');
    headline.classList.remove('hidden');
})


// Dynamic favicon
const iconPlace = document.getElementById('favicon');
document.body.addEventListener('click', () => {
    let icon = Math.round(Math.random() * 19) + 1;
    iconPlace.setAttribute(`href`, `icons/${icon}.png`);
});
