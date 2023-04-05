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
                const [content, what] = element;
                switch (content) {
                    case 'image':
                        const img: HTMLElement = document.createElement('img');
                        img.setAttribute('src', what);
                        block.appendChild(img)
                        break;

                    case 'html':
                        const code: HTMLElement = document.createElement('div');
                        code.style.display = 'inline';
                        code.innerHTML = what;
                        block.appendChild(code);
                        break;

                    case 'd3':
                        block.setAttribute('id', 'viz');
                        place ? place.appendChild(block) : null;
                        createViz(what);
                        break;

                    //Link to new block (the first element - text of the link, second – block)
                    default:
                        const link: HTMLElement = document.createElement('a');
                        link.textContent = content;
                        link.classList.add('clickable');
                        link.classList.add('dashed');
                        block.appendChild(link);

                        link.addEventListener('click', () => {
                            spaceForNewBlock ? new Block(what, spaceForNewBlock) : null;
                            spaceForNewBlock ? spaceForNewBlock.removeChild(link) : null;
                            setReset();
                        })
                }
            }
            const spaceForNewBlock = place ? place.appendChild(block) : null;

        })
    }
}