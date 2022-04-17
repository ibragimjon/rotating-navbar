const openns = document.querySelector('#open')
const closep = document.querySelector('#close')
const container = document.querySelector('.container')

openns.addEventListener('click', ()=>{
    container.classList.add('show-nav')
})

closep.addEventListener('click', ()=>{
    container.classList.remove('show-nav')
})