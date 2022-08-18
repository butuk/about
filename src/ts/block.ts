export class Block {
    public content: string | object;

    constructor(content: any, place: HTMLElement | null) {
        this.content = content;

        Array.prototype.forEach.call(this.content, element => {
            const block: HTMLElement = document.createElement('span');
            block.setAttribute('display', 'inline');
            if(typeof element === 'string') {
                block.innerHTML = element;
                place ? place.appendChild(block) : null;

            } else if(typeof element === 'object') {
                const link: HTMLElement = document.createElement('a');
                link.innerHTML = element[0];
                block.appendChild(link);

                const placeForNewBlock = place ? place.appendChild(block) : null;

                link.addEventListener('click', () => {
                    placeForNewBlock? new Block(element[1], placeForNewBlock) : null;
                    placeForNewBlock ? placeForNewBlock.removeChild(link) : null;

                })
            }
        })
    }
}