let sidebar = document.querySelector('#search-room__sidebar'),
    sidebarBtn = document.querySelector('#search-room__sidebar-btn'),
    body = document.querySelector('body')


sidebarBtn.addEventListener('click', () =>{
  sidebar.classList.toggle('active')
  sidebarBtn.classList.toggle('active')
  body.classList.toggle('lock')
})