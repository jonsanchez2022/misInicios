let contador    = document.getElementById("boton-principal")
let numeros     = document.getElementById("contenedor-contador")
let reiniciador = document.getElementById("boton-reiniciar")
let contando    = 0

contador.addEventListener("click", ()=>{
    contando++
    numeros.textContent=(contando)
})


reiniciador.addEventListener("click", ()=>{
    contando=0
    numeros.textContent=(contando)
})
