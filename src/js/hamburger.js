const openModal = () => {
  const hamburger = document.querySelector('.header-nav-hamb'),
    menuHamburger = document.querySelector('.header-nav-list')

  hamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('translate-0')
    hamburger.classList.toggle('header-nav-hamb-active')
  })
  //
}

export default openModal
