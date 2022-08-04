const headline = document.querySelector('.headline');
const reset = document.querySelector('.reset');
const ux = document.querySelector('.ux-ui');
const trainer = document.querySelector('.trainer');
const clickable = document.querySelectorAll('.clickable');
const

// Dynamic favicon
const iconPlace = document.getElementById('favicon');
document.body.addEventListener('click', () => {
    let icon = Math.round(Math.random() * 19) + 1;
    iconPlace.setAttribute(`href`, `icons/${icon}.png`);
});


clickable.forEach(element => {
    element.addEventListener('click', () => {
        reset.classList.remove('hidden');
        headline.classList.add('hidden');
        element.nextElementSibling.classList.toggle('hidden');
        element.classList.toggle('hidden');
    })
})

// Reset to default state
reset.addEventListener('click', () => {
    reset.classList.toggle('hidden');
    headline.classList.toggle('hidden');
    document.querySelectorAll('span').forEach(element => {
        element.classList.add('hidden');
    })
    ux.classList.remove('hidden');
    trainer.classList.remove('hidden');
})


