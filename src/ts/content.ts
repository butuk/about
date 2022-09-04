import {behance} from "./images";
/*
Place blocks from bottom to top
Names of visualizations can be found in visualizations.ts
*/

const experience : object =
    [
        'Worked ',
        'in',
        ['html', '&nbsp;'],
        'various ',
        ['html', '<span class="agency">agencies, </span>'],
        ['html', '<span class="studio">design studios </span>'],
        'and',
        ['html', '&nbsp;'],
        ['html', '<span class="product">product companies </span>'],
        ['d3', 'experience'],
    ]

const trainer : object =
    [
        'Can help with training designers',
        ' ',
        'from scratch',
    ];

const ready : object =
    [
        'ready to',
        ['html', '&nbsp;'],
        'help with web-related design tasks',
    ];

const visualizer : object =
    [
        'Has some information organisation and',
        ['html', '&nbsp;'],
        'visualization ',
        ['html', '<a href="https://www.behance.net/butuk" target="_blank">works ' + behance + '</a>'],
    ]

export const start : object =
    [
        ['Experienced', experience],
        ' ',
        ['html', '<abbr>UX/UI</abbr>'],
        ' ',
        'designer',
        '. ',
        ['Information visualizer', visualizer],
        '. ',
        ['Design trainer', trainer],
        '. ',
    ];