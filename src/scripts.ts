import "./styles.scss";
//import "./icons/icon_1.png";

type Element = HTMLElement | null;

const headline : Element = document.querySelector('.headline');
const reset : Element = document.querySelector('.reset');
const ux : Element = document.querySelector('.ux-ui');
const trainer : Element = document.querySelector('.trainer');
const help : Element = document.querySelector('.can-help');
const graduated : Element = document.querySelector('.graduated');

if(ux) {
ux.addEventListener('click', () => {
        ux.classList.add('hidden');
        help ? help.classList.remove('hidden') : null;
        reset ? reset.classList.remove('hidden') : null;
        headline ? headline.classList.add('hidden') : null;
    })
}

if(trainer) {
trainer.addEventListener('click', () => {
        trainer.classList.add('hidden');
        graduated ? graduated.classList.remove('hidden') : null;
        reset ? reset.classList.remove('hidden') : null;
        headline ? headline.classList.add('hidden') : null;
    })
}


//const clickable = document.querySelectorAll('.clickable');

// Dynamic favicon
const iconPlace : HTMLElement | null = document.getElementById('favicon');
document.body.addEventListener('click', () => {
    console.log('Hi!');
    let icon : number = Math.round(Math.random() * 19) + 1;
    if (iconPlace) {
        iconPlace.setAttribute(`href`, `icons/${icon}.png`);
    }
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
if (reset) {
    reset.addEventListener('click', () => {
        reset.classList.toggle('hidden');
        headline ? headline.classList.toggle('hidden') : null;
        help ? help.classList.add('hidden') : null;
        graduated ? graduated.classList.add('hidden') : null;
        ux ? ux.classList.remove('hidden') : null;
        trainer ? trainer.classList.remove('hidden') : null;
    });
}