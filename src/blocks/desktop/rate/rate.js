let rates = $('.rate')

$.each(rates, (index, rate) => {
  let rateStars = $(rate).find('.rate__star')

  $.each(rateStars, (index, rateStar) => {

    $(rateStar).on('click', () => {
      setStars(index)
    })
  })

  function setStars(index){
    for (let i = 0; i <= index; i++){
      $(rateStars[i]).find('img').attr('src', 'assets/img/star.svg')
    }
    for (let i = index + 1; i < 5; i++){
      $(rateStars[i]).find('img').attr('src', 'assets/img/star_border.svg')
    }
  }
  
})

