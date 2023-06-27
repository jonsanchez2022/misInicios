const sideBar  = document.querySelector('.sidebar')
const mainBtn  = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')



mainBtn.addEventListener('click', ()=>{
    sideBar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', ()=>{
    sideBar.classList.remove('show-sidebar')
})