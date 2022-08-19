import {Block} from './block';
import {start} from "./content";

export function initiateStart() {
    new Block(start, document.querySelector('.content'));
}

initiateStart();
