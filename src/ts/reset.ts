import {initiateStart} from "./start";
import {Pointer} from "./pointer";

const headline = <HTMLElement>document.querySelector('.headline');
let pointerIsShown : boolean = false;

// Headline look
export function setHeadline() {
    const headPointer : HTMLElement = <HTMLObjectElement>document.querySelector('.pointer');
    headline.classList.remove('clickable');
    headPointer.remove();
    pointerIsShown = false;
    headline.removeEventListener('click', headlineClick);

}
export function setReset() {
    headline.addEventListener('click', headlineClick);
    headline.classList.add('clickable');
    !pointerIsShown ? new Pointer : null;
    pointerIsShown = true;
}

function headlineClick() {
    const place = <HTMLObjectElement>document.querySelector('.content');
    place.querySelectorAll('div').forEach(element => {
        element.remove();
    });
    setHeadline();
    initiateStart();
}