const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')

for(let card of cards){
    card.addEventListener("click", function(){
        const id = card.getAttribute('id')

        window.location.href = `/receitas/${id}`

    })
}
