const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')

for(let card of cards){
    card.addEventListener("click", function(){
        const idFoto = card.getAttribute('idFoto')
        const foodName = card.getAttribute('name')
        const foodBy = card.getAttribute('by')

        modalOverlay.querySelector('img').src = `${idFoto}`
        

        modalOverlay.querySelector('.modal-info h2').textContent = `${foodName}`
        modalOverlay.querySelector('.modal-info p').textContent = `${foodBy}`




        

        modalOverlay.classList.add('active')
    })
}

modalOverlay.querySelector('.close-modal p').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})