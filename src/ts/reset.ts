import {initiateStart} from "./start";

const headline = <HTMLElement>document.querySelector('.headline');

// Headline look
export function setHeadline() {
    if (headline.textContent ? headline.textContent.charAt(0) === '>' : null) {
        headline.textContent = headline.textContent ? headline.textContent.slice(1, headline.textContent.length - 1) : null;
    }
    headline.classList.remove('reset', 'clickable');
}

export function setReset() {
    if (headline.textContent ? headline.textContent.charAt(0) !== '>' : null) {
        headline.innerHTML = '>' + headline.innerHTML + '<';
    }
    headline.classList.add('reset', 'clickable');
}

// Content reset
headline.addEventListener('click', () => {
    const place= <HTMLObjectElement>document.querySelector('.content');
    place.querySelectorAll('div').forEach(element => {
        element.remove();
    });
    setHeadline();
    initiateStart();
});