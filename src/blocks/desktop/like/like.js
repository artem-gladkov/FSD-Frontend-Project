let likes = $('.like')

$.each(likes, (index, like) => {
  let heart = $(like).find('.like__heart img'),
      count = $(like).find('.like__count'),
      isAdd = false
  
  $(like).on('click', () => {

    $(like).toggleClass('active')

    heart.attr('src', function(index, attr){
      return attr == 'assets/img/svg/heart__border.svg' ? 'assets/img/svg/heart.svg' : 'assets/img/svg/heart__border.svg'
    })

    if(!isAdd) {
      count.text(+count.text() + 1)
      isAdd = true
    } else{
      count.text(+count.text() - 1)
      isAdd = false
    }
    

  })
})