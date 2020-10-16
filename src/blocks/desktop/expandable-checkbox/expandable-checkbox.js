let expandableCheckboxes = $('.expandable-checkbox')

$.each(expandableCheckboxes, (index, list) => {
  let titles = $(list).find('.expandable-checkbox__title')
  $.each(titles, (index, title) => {
    $(title).on('click', () => {
      $(list).toggleClass('show')
    })
  })
})