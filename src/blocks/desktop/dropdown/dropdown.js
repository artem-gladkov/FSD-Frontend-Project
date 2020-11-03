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


//Закрытие по нажатию вне дропдауна
document.addEventListener('click', event => {
  event.stopPropagation()
  let isDropdown = !!(event.path.slice(0, (event.path.length - 3)).find(item => {
      return !!item.className.includes('dropdown')
  }))

  if (!isDropdown){
    document.querySelectorAll('.dropdown__input').forEach(input => input.classList.remove('show'))
  }
})