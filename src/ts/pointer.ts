export class Pointer {
    constructor(){
        const pointer : HTMLElement = document.createElement('div');
        pointer.innerHTML = '>';
        pointer.classList.add('pointer', 'clickable');
        document.body.prepend(pointer);

        pointer.addEventListener('click', function () {
            window.scrollTo(0,0);
        })
    }
}