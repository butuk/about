import {Block} from "./block";

const trained =
    'as trained 19 newbie designers in 2021.'

const trainer = [
    'Also can help with training designers',
    ' ',
    ['from scratch', trained],
];

const can_help =
    'Can help with web-related design tasks and data visualization. ';

const start = [
    ['UX/UI/Info-designer.', can_help],
    ' ',
    ['Design trainer.', trainer],
];

new Block(start, document.querySelector('.content'));
