const openPopUp = document.getElementById('contact_open_pop_up')
const closePopUp = document.getElementById('contact_close_pop_up')
const popUp = document.getElementById('contact_pop_up')

openPopUp.addEventListener('click', function(e){
    e.preventDefault()
    popUp.classList.add('active')
})
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
    body.classList.remove('no_тscroll')
})

const menuOpenPopUp = document.getElementById('menu_open_pop_up')
const menuClosePopUp = document.getElementById('menu_close_pop_up')
const menuPopUp = document.getElementById('menu_pop_up')
const contactPopUp2 = document.getElementById('contact_open_pop_up2')
const closeContactPopUp2 = document.getElementById('contact_close_pop_up')

menuOpenPopUp.addEventListener('click', function(e){
    e.preventDefault()
    menuPopUp.classList.add('active')
})
menuClosePopUp.addEventListener('click', () => {
    menuPopUp.classList.remove('active')
})

contactPopUp2.addEventListener('click', function (e){
    e.preventDefault()
    popUp.classList.add('active')
    menuPopUp.classList.remove('active')
})
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})