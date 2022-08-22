import {initiateStart} from "./start";

const headline : HTMLElement | null = document.querySelector('.headline');

// Headline look
export function setHeadline() {
    if (headline ? (headline.textContent ? headline.textContent.charAt(0) === '>' : null) : null) {
        headline ? (headline.textContent = headline.textContent ? headline.textContent.slice(1, headline.textContent.length - 1) : null) : null;
    }
    headline ? headline.classList.remove('reset', 'clickable') : null;
}

export function setReset() {
    if (headline ? (headline.textContent ? headline.textContent.charAt(0) !== '>' : null) : null) {
        headline ? headline.innerHTML = '>' + headline.innerHTML + '<' : null;
    }
    headline ? headline.classList.add('reset', 'clickable') : null;
}

// Content reset
headline ? headline.addEventListener('click', () => {
    const place : HTMLObjectElement | null = document.querySelector('.content');
    place? place.querySelectorAll('div').forEach(element => {
        element.remove();
    }) : null;
    setHeadline();
    initiateStart();
}) : null;