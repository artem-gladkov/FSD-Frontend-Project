let dropdowns = $('.dropdown')
    
$.each(dropdowns, function(index, dropdown){
  let btnShow = $(dropdown).find('.dropdown__btn')

  btnShow.on('click', function(){
    btnShow.toggleClass('show')
  })
})

