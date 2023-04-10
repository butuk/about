export class Pointer {
    constructor(){
        const pointer : HTMLElement = document.createElement('div');
        pointer.innerHTML = '>';
        pointer.classList.add('pointer', 'clickable');
        document.body.prepend(pointer);

        pointer.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        });

        let lastScroll = window.scrollY;
        const header = document.querySelector('.headline');


        window.addEventListener('scroll', function () {
            const currentScroll = window.scrollY;
            let angle = header ? (header.getBoundingClientRect().top - pointer.getBoundingClientRect().top) / 2 : null;
            if (angle && angle <= -90) {
                angle = -90;
            };
            console.log(angle);
            const rotation = angle ? (currentScroll > lastScroll ? angle : -angle) : null;
            pointer.style.transform = `rotate(${rotation}deg)`;
        });
    }
}


