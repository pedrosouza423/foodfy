const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')

for(let card of cards){
    card.addEventListener("click", function(){
        const idFoto = card.getAttribute('id')
        modalOverlay.querySelector('img').src = `${idFoto}`

        const prato = card.querySelector('.card-content p')
        modalOverlay.querySelector('.modal-info h2').innerHTML = `${prato}`

        

        modalOverlay.classList.add('active')
    })
}

modalOverlay.querySelector('.close-modal p').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})