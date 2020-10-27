let headers = document.querySelectorAll('.header')

headers.forEach(header => {
  let headerNav = header.querySelector('.header__nav'),
      headerBurger = header.querySelector('.header__burger')
    
  headerBurger.addEventListener('click', () => {
    headerNav.classList.toggle('show')
    headerBurger.classList.toggle('show')
  })
})