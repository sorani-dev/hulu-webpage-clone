/** @type {HTMLElement} */
const modal = document.querySelector('.modal')
/** @type {HTMLElement} */
const loginBtn = document.querySelector('.login-btn')
/** @type {HTMLElement} */
const closeBtn = document.querySelector('.close')
console.log(closeBtn);
const openModal = () => {
    modal.style.display = 'block'
    modal.setAttribute('aria-hidden', 'false')
}

const closeModal = () => {
    modal.style.display = 'none'
    modal.setAttribute('aria-hidden', 'true')
}
/**
 *
 * @param {Event} e
 */
const outsideClick = (e)=>{
   if (e.target == modal) {
       closeModal()
   }
}

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)