const trainer: object | null = document.querySelector('.trainer');
//const trained = document.querySelector('.trained');


trainer.addEventListener('click', ()=> {

})


// Dynamic favicon
const iconPlace = document.getElementById('favicon');
document.body.addEventListener('click', () => {
    let icon = Math.round(Math.random()*19)+1;
    iconPlace.setAttribute(`href`, `icons/${icon}.png`)
})