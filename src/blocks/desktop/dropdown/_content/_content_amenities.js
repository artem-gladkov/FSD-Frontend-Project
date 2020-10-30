let dropdownsAmenities = document.querySelectorAll('.dropdown.dropdown_content_amenities')

dropdownsAmenities.forEach(dropdown => {
  let inputValue = dropdown.querySelector('.dropdown__input-placeholder'),
      items = dropdown.querySelectorAll('.dropdown__item'),
      commonCount = 0,
      values = [],
      btnClear = dropdown.querySelector('.dropdown__menu-btn-clear')

  if(btnClear){
    btnClear.addEventListener('click', () => {
      commonCount = 0
      values = []

      inputValue.innerText = 'Выберите удобства'
      
      items.forEach(item => {
        item.querySelector('.dropdown__item-num').innerText = 0
      })
    })
  }

  items.forEach((item,index) => {
    
    let itemNum = item.querySelector('.dropdown__item-num'),
        itemText = item.querySelector('.dropdown__item-text').innerHTML

    item.addEventListener('click', event => {
      event.stopPropagation()

      switch (event.target.id) {
        case 'dropdown__item-btn-reduce': 
          if(itemNum.innerText <= 0) break // Если счетчик равен 0, то ничего не делать

          itemNum.innerText--
          commonCount--
          itemNum.innerText = itemNum.innerText

          if (commonCount === 0) {
            inputValue.innerText = 'Выберите удобства'
            values = []
            break
          }

          if (itemText.toLowerCase() === 'спальни'){
            if(itemNum.innerText === '0'){
              values[index] = ''
            } else if(itemNum.innerText === 1){
              values[index] = `${itemNum.innerText} спальня`
            } else if(itemNum.innerText > 1 && itemNum.innerText < 5){
              values[index] = `${itemNum.innerText} спальни`
            } else {
              values[index] = `${itemNum.innerText} спален`
            }
          } else if  (itemText.toLowerCase() === 'кровати'){
              if(itemNum.innerText === '0'){
                values[index] = ''
              } else if(itemNum.innerText === 1){
                values[index] = `${itemNum.innerText} кровать`
              } else if(itemNum.innerText > 1 && itemNum.innerText < 5){
                values[index] = `${itemNum.innerText} кровати`
              } else {
                values[index] = `${itemNum.innerText} кроватей`
              }
          } else if  (itemText.toLowerCase() === 'ванные комнаты'){
              if(itemNum.innerText === '0'){
                values[index] = ''
              } else if(itemNum.innerText === 1){
                values[index] = `${itemNum.innerText} ванная комната`
              } else if(itemNum.innerText > 1 && itemNum.innerText < 5){
                values[index] = `${itemNum.innerText} ванные комнаты`
              } else {
                values[index] = `${itemNum.innerText} ванных комнат`
              }
            } 
            inputValue.innerText = values.filter(value => !!value).join(', ')
          break

        case  'dropdown__item-btn-add':

          itemNum.innerText++
          commonCount++
          itemNum.innerText = itemNum.innerText 

          if (itemText.toLowerCase() === 'спальни'){
            if(itemNum.innerText === 1){
              values[index] = `${itemNum.innerText} спальня`
            } else if(itemNum.innerText > 1 && itemNum.innerText < 5){
              values[index] = `${itemNum.innerText} спальни`
            } else {
              values[index] = `${itemNum.innerText} спален`
            }
          } else if  (itemText.toLowerCase() === 'кровати'){
              if(itemNum.innerText === 1){
                values[index] = `${itemNum.innerText} кровать`
              } else if(itemNum.innerText > 1 && itemNum.innerText < 5){
                values[index] = `${itemNum.innerText} кровати`
              } else {
                values[index] = `${itemNum.innerText} кроватей`
              }
          } else if  (itemText.toLowerCase() === 'ванные комнаты'){
              if(itemNum.innerText === 1){
                values[index] = `${itemNum.innerText} ванная комната`
              } else if(itemNum.innerText > 1 && itemNum.innerText < 5){
                values[index] = `${itemNum.innerText} ванные комнаты`
              } else {
                values[index] = `${itemNum.innerText} ванных комнат`
              }
            } 
            inputValue.innerText = values.filter(value => !!value).join(', ')
          break
      }

     
    })
  })
})

