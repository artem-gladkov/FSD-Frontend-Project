$('.datepicker-here').datepicker({
  clearButton: true,
  prevHtml: '<div class="arrow arrow-prev"></div>',
  nextHtml: '<div class="arrow arrow-next"></div>'
})

document.addEventListener('DOMContentLoaded', function(){
  let allButtons = document.querySelectorAll('.datepicker .datepicker--buttons')

  allButtons.forEach(datepickerButtons => {
      datepickerButtons.insertAdjacentHTML('beforeend', '<span class="datepicker--button" data-action="hide">Применить</span>')
  });
}, false);
