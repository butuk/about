import {setReset} from "./reset";

export class Block {
    public content: string | object;

    constructor(content: any, place: HTMLElement | null) {
        this.content = content;

        Array.prototype.forEach.call(this.content, element => {
            const block: HTMLElement = document.createElement('div');
            block.style.display = 'inline';

            if(typeof element === 'string') {
                block.innerHTML = element;
                place ? place.appendChild(block) : null;

            } else if (typeof element === 'object' && element[0] === 'image') {
                const img: HTMLElement = document.createElement('img');
                img.setAttribute('src', element[1]);
                block.appendChild(img)
                place ? place.appendChild(block) : null;
                console.log(block);

            } else if(typeof element === 'object' && element[0] === 'link') {
                const link: HTMLElement = document.createElement('a');
                link.innerHTML = element[1];
                link.classList.add('clickable');
                link.classList.add('dashed');
                block.appendChild(link);

                const spaceForNewBlock = place ? place.appendChild(block) : null;

                link.addEventListener('click', () => {
                    spaceForNewBlock? new Block(element[2], spaceForNewBlock) : null;
                    spaceForNewBlock ? spaceForNewBlock.removeChild(link) : null;
                    setReset();
                })
            }
        })
    }
}