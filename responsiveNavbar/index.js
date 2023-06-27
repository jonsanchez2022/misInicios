// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const BarraNav = document.querySelector('.nav-toggle')
const Enlace   = document.querySelector('.links')


BarraNav.addEventListener('click', ()=>{
    /* if (Enlace.classList.contains('show-links')){
        Enlace.classList.remove('show-links')
    }else{
        Enlace.classList.add('show-links')
    } */
    
    Enlace.classList.toggle('show-links')
})