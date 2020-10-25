$('.datepicker_type_common').datepicker({
  range: true,
  dateFormat: 'd MM',
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
  prevHtml: '<div class="arrow arrow-prev"></div>',
  nextHtml: '<div class="arrow arrow-next"></div>',
})


let allButtons = document.querySelectorAll('.datepicker .datepicker--buttons')

allButtons.forEach(datepickerButtons => {
    datepickerButtons.insertAdjacentHTML('beforeend', '<span class="datepicker--button" data-action="hide">Применить</span>')
});