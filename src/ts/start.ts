import {Block} from './block';
import {start} from "./content";

initiateStart();

export function initiateStart() {
    new Block(start, document.querySelector('.content'));
}

export function delegate(box : HTMLElement, eventName : string, selector : string, fn : Function) : void {
    box.addEventListener(eventName, function(e : Event) : void {
        const target = e.target as HTMLElement;
        const element = target.closest(selector) as HTMLElement;

        if(element !== null && box.contains(element)) {
            fn.call(element, e);
        }
    });
}