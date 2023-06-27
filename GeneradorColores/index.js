const generador = document.getElementById('generador')
const pantalla  = document.getElementById('colores')
const cuerpo    = document.getElementById('generadorColores')


generador.addEventListener("click",()=>{
    let r         = Math.floor(Math.random()*256)
    let g         = Math.floor(Math.random()*256)
    let b         = Math.floor(Math.random()*256)
    pantalla.textContent=(r +", " +g +" , " +b)
    cuerpo.style.backgroundColor = `rgb(${r},${g},${b})`
})