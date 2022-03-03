let hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    document.body.classList.toggle('menuOpen')
})