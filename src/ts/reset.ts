import {initiateStart} from "./start";
import {Pointer} from "./pointer";

const headline = <HTMLElement>document.querySelector('.headline');
let pointerIsShown : boolean = false;

// Headline look
export function setHeadline() {
    const headPointer : HTMLElement = <HTMLObjectElement>document.querySelector('.pointer');
    headPointer.remove();
    pointerIsShown = false;
    headline.classList.remove('clickable');

}

export function setReset() {
    headline.classList.add('clickable');
    !pointerIsShown ? new Pointer : null;
    pointerIsShown = true;
}

// Content reset
headline.addEventListener('click', () => {
    const place = <HTMLObjectElement>document.querySelector('.content');
    place.querySelectorAll('div').forEach(element => {
        element.remove();
    });
    setHeadline();
    initiateStart();
});