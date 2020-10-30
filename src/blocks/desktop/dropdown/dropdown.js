let dropdowns = document.querySelectorAll('.dropdown')
    
dropdowns.forEach(dropdown => {
  let input = dropdown.querySelector('.dropdown__input'),
      btnApply = dropdown.querySelector('.dropdown__menu-btn-apply')
      
  // Открытие дропдауна    
  input.addEventListener('click', () => {
    input.classList.toggle('show')
  })

  // Закрытие по кнопке "применить" 
  if(btnApply) {
    btnApply.addEventListener('click', () => {
      input.classList.toggle('show')
    })
  }
  
})

