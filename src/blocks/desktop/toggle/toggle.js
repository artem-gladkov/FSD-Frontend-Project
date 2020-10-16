let toggles = $('.toggle')

$.each(toggles, (index, toggle) => {
  let toggleBox = $(toggle).find('.toggle__box'),
      toggleCircle = $(toggle).find('.toggle__circle')

  $(toggle).on('click', () => {
    toggleBox.toggleClass('active')
  })
})