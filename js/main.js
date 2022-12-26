const modal = document.querySelector('.modal')
const log = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click',openModal)
closeBtn.addEventListener('click',closeModal)
window.addEventListener('click',outclickClick)

function openModal(){
    modal.style.display = 'block'
}

function closeModal(){
    modal.style.display = 'none'
}

function outsideClick(e){
    if(e.target == modal){
        closeModal()
    }
}