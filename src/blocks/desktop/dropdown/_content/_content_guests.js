let dropdownsGuests = document.querySelectorAll('.dropdown.dropdown_content_guests')

dropdownsGuests.forEach(dropdown => {
  let inputValue = dropdown.querySelector('.dropdown__input-placeholder'),
      items = dropdown.querySelectorAll('.dropdown__item'),
      guestsCount = 0,
      babyCount = 0,
      commonCount = 0,
      values = [],
      btnClear = dropdown.querySelector('.dropdown__menu-btn-clear')
  
  if(btnClear){
    btnClear.addEventListener('click', () => {
      guestsCount = 0
      babyCount = 0
      commonCount = 0
      values = []

      inputValue.innerText = 'Сколько гостей'
      
      items.forEach(item => {
        item.querySelector('.dropdown__item-num').innerText = 0
      })
    })
  }
 
  items.forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation()

      let itemCount = item.querySelector('.dropdown__item-num'),
          itemText = item.querySelector('.dropdown__item-text').innerHTML

      switch (e.target.id) {
        case 'dropdown__item-btn-reduce':
          if(itemCount.innerText <= 0) break // Если счетчик равен 0, то ничего не делать

          --itemCount.innerText 

          if(itemText.toLowerCase() == 'младенцы' && babyCount > 0){ 
            babyCount--
            commonCount--

            if (commonCount === 0) {
              inputValue.innerText = 'Сколько гостей'
              values = []
              break
            }
            
            if (babyCount === 0){
              values[1] = ''
            } else if (babyCount === 1){
              values[1] = `${babyCount} младенец`  // Определение падежа
            } else if (babyCount > 1 && babyCount < 5){
              values[1] = `${babyCount} младенца`
            } else {
              values[1] = `${babyCount} младенцев`
            }
          } else if (itemText.toLowerCase() !== 'младенцы' && guestsCount > 0){
            guestsCount--
            commonCount--

            if (commonCount === 0) {
              inputValue.innerText = 'Сколько гостей'
              values = []
              break
            }
              
            if (guestsCount === 0){
              values[0] = ''
            } else if (guestsCount === 1){
              values[0] = `${guestsCount} гость`  // Определение падежа
            } else if (guestsCount > 1 && guestsCount < 5){
              values[0] = `${guestsCount} гостя`
            } else {
              values[0] = `${guestsCount} гостей`
            }
          }
          
          inputValue.innerText = values.filter(item => item != '').join(', ')

          break;
        case  'dropdown__item-btn-add':
          ++itemCount.innerText
          if(itemText.toLowerCase() == 'младенцы'){

            babyCount++
            commonCount++

            if (commonCount === 1) inputValue.innerText = '' // При первом нажатии placeholder стирается

            if (babyCount === 1){
              values[1] = `${babyCount} младенец`  // Определение падежа
            } else if (babyCount > 1 && babyCount < 5){
              values[1] = `${babyCount} младенца`
            } else {
              values[1] = `${babyCount} младенцев`
            }

            

            
          } else {
            guestsCount++
            commonCount++

            if (commonCount === 1) inputValue.innerText = ''  // При первом нажатии placeholder стирается

            if (guestsCount === 1){
              values[0] = `${guestsCount} гость`  // Определение падежа
            } else if (guestsCount > 1 && guestsCount < 5){
              values[0] = `${guestsCount} гостя`
            } else {
              values[0] = `${guestsCount} гостей`
            }

          }


          inputValue.innerText = values.filter(item => item != '').join(', ')
          
          break
      }
    })
  })
});