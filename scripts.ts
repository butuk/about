const trainer = document.querySelector('.trainer');
const trained = document.querySelector('.trained');
trainer.addEventListener('click', ()=> {
    trainer.classList.add('hidden');
    trained.classList.remove('hidden');
})