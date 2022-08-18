// Dynamic favicon
const iconPlace : HTMLElement | null = document.getElementById('favicon');
document.body.addEventListener('click', () => {
    let icon : number = Math.round(Math.random() * 19) + 1;
    if (iconPlace) {
        iconPlace.setAttribute(`href`, `icons/${icon}.png`);
    }
});
