let allDoubleDatepickers = $('.datepicker-input_type_double')

$.each(allDoubleDatepickers, function(index, datepicker){
  $(datepicker).find('.datepicker-input__value-from').datepicker({
    range: true,
    multipleDatesSeparator: '-',
    clearButton: true,
    onSelect: function (fd, d, picker) { 
      $(datepicker).find('.datepicker-input__value-from').val(fd.split("-")[0]);
      $(datepicker).find(".datepicker-input__value-to").val(fd.split("-")[1]);
    },
    prevHtml: '<div class="arrow arrow-prev"></div>',
    nextHtml: '<div class="arrow arrow-next"></div>'
  })
})
