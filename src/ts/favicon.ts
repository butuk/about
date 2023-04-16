const iconsAmount = 20;
const favicon : HTMLLinkElement = <HTMLLinkElement>document.querySelector('link[rel="icon"]');

document.body.addEventListener('click', setNewIcon);

function setNewIcon() {
    let random : Number = Math.floor(Math.random()*iconsAmount + 1);
    favicon.href = `/icons/${random}.png`;
}

