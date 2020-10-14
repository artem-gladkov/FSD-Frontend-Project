let dropdownsGuests = $('.dropdown_content_guests')

    

$.each(dropdownsGuests, function(index, dropdown){
  let btnShow = $(dropdown).find('.dropdown__btn'),
      items = $(dropdown).find('.dropdown__item'),
      placeholder = $(dropdown).find('.dropdown__btn-value'),
      btnClear = $(dropdown).find('.dropdown__menu-btn-clear'),
      btnApply = $(dropdown).find('.dropdown__menu-btn-apply'),
      dropdownCount = 0
  
  btnClear.on('click', function(){
    dropdownCount = 0
    $.each(items, (i, e) => {
      $(e).find('.dropdown__item-num').text(0)
      placeholder.text('Сколько гостей')
    })
  })  
  
  btnApply.on('click', function(){
    btnShow.toggleClass('show')
  })  
  
    
    
  
  $.each(items, function(index, item){
    let itemCount = $(item).find('.dropdown__item-num'),
        itemCountValue = +$(item).find('.dropdown__item-num').text(),
        btnAdd = $(item).find('.dropdown__item-btn-add'),
        btnReduce = $(item).find('.dropdown__item-btn-reduce')
    
    btnAdd.on('click', function(){
      itemCountValue = +$(item).find('.dropdown__item-num').text()
      dropdownCount++
      itemCount.text(++itemCountValue)
      if(dropdownCount === 1) {
        placeholder.text(dropdownCount + ' гость')
      } else if (dropdownCount > 1 && dropdownCount < 5){
        placeholder.text(dropdownCount + ' гостя')
      } else {
        placeholder.text(dropdownCount + ' гостей')
      }
      
    })

    btnReduce.on('click', function(){
      itemCountValue = +$(item).find('.dropdown__item-num').text()
      if(itemCountValue >= 1){
        dropdownCount--
        itemCount.text(--itemCountValue)
      }

      if(dropdownCount === 1) {
        placeholder.text(dropdownCount + ' гость')
      } else if (dropdownCount > 1 && dropdownCount < 5){
        placeholder.text(dropdownCount + ' гостя')
      } else {
        placeholder.text(dropdownCount + ' гостей')
      }

      if (dropdownCount == 0){
        placeholder.text('Сколько гостей')
      }
    })
  })
})

