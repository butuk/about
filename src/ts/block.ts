import {setReset} from "./reset";
import {createViz} from "./visualizations";

export class Block {
    public content: string | object;

    constructor(content: object, place: HTMLElement | null) {
        this.content = content;

        Array.prototype.forEach.call(this.content, element => {
            const block: HTMLElement = document.createElement('div');
            block.style.display = 'inline';

            if(typeof element === 'string') {
                block.textContent = element;

            } else if (typeof element === 'object') {
                switch (element[0]) {
                    case 'image':
                        const img: HTMLElement = document.createElement('img');
                        img.setAttribute('src', element[1]);
                        block.appendChild(img)
                        break;

                    case 'html':
                        const code: HTMLElement = document.createElement('div');
                        code.style.display = 'inline';
                        code.innerHTML = element[1];
                        block.appendChild(code);
                        break;

                    case 'd3':
                        block.setAttribute('id', 'viz');
/*

                        const container : HTMLElement = document.createElement('div');
                        container.classList.add('svg-container');
                        const svg : HTMLElement = document.createElement('svg');
                        svg.classList.add('svg-content');
                        svg.setAttribute('preserveAspectRatio', 'xMinYMin meet');
                        block.append(container);
                        container.append(svg);

*/
                        place ? place.appendChild(block) : null;

                        createViz(element[1]);
                        break;

                    //Link to new block (the first element - text of the link, second – block)
                    default:
                        const link: HTMLElement = document.createElement('a');
                        link.textContent = element[0];
                        link.classList.add('clickable');
                        link.classList.add('dashed');
                        block.appendChild(link);

                        link.addEventListener('click', () => {
                            spaceForNewBlock ? new Block(element[1], spaceForNewBlock) : null;
                            spaceForNewBlock ? spaceForNewBlock.removeChild(link) : null;
                            setReset();
                        })
                }
            }
            const spaceForNewBlock = place ? place.appendChild(block) : null;

        })
    }
}