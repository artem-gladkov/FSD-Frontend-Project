let dropdownsAmenities = $('.dropdown.dropdown_content_amenities')

$.each(dropdownsAmenities, (index, dropdown) => {
  let btnShow = $(dropdown).find('.dropdown__btn'),
      items = $(dropdown).find('.dropdown__item'),
      placeholder = $(dropdown).find('.dropdown__btn-value'),
      // btnClear = $(dropdown).find('.dropdown__menu-btn-clear'),
      // btnApply = $(dropdown).find('.dropdown__menu-btn-apply'),
      dropdownCount = 0

  $.each(items, (index, item) => {
    let itemCount = $(item).find('.dropdown__item-num'),
        itemText,
        countNum = 0,
        btnAdd = $(item).find('.dropdown__item-btn-add'),
        btnReduce = $(item).find('.dropdown__item-btn-reduce')

    btnAdd.on('click', () => {
      countNum = +itemCount.text()
      itemText = $(item).find('.dropdown__item-text')
      countNum++
      dropdownCount++
      itemCount.text(countNum)      
    })

    btnReduce.on('click', () => {
      countNum = +itemCount.text()
      if (countNum > 0){
        countNum--
        dropdownCount--
        itemCount.text(countNum)
      }
      if(dropdownCount === 0){
        placeholder.empty()
      }
    })
  })
})
    