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
