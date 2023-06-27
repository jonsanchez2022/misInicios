const review=[
{
    id: 1,
    nombre: "Lucas García",
    posicion: "Gerente de Ventas",
    comentario: "Quiero expresar mi gratitud y satisfacción por el servicio excepcional que recibí de la compañía XYZ. Recientemente adquirí uno de sus productos y estoy realmente impresionado. Desde el momento en que realicé mi pedido, el equipo de atención al cliente fue amable, atento y dispuesto a responder todas mis preguntas. La entrega fue rápida y el producto llegó en perfectas condiciones.",
    imagen: "images/1.jpg"

},
{
    id: 2,
    nombre: "Emma Johnson",
    posicion: "Analista de Marketing",
    comentario: "La calidad del producto superó mis expectativas. Está bien diseñado, duradero y cumple con todas mis necesidades. Además, la experiencia de uso ha sido increíblemente satisfactoria. Me ha brindado la funcionalidad y eficiencia que estaba buscando, y ha mejorado significativamente mi vida diaria.",
    imagen: "images/2.jpg"
},
{
    id: 3,
    nombre: "Oliver Rodriguez",
    posicion: "Contador Financiero",
    comentario: "Recomendaría sin dudarlo los productos de la compañía XYZ a cualquier persona que esté buscando calidad, excelente servicio al cliente y una experiencia de compra sin problemas. Estoy realmente satisfecho con mi compra y estoy seguro de que seguiré siendo un cliente fiel en el futuro. ¡Gracias por superar mis expectativas y por brindarme una experiencia tan positiva!",
    imagen: "images/3.jpg"
},
{
    id: 4,
    nombre: "Ava Smith",
    posicion: "Desarrollador de Software",
    comentario: "Quiero expresar mi más sincero agradecimiento a la empresa ABC por brindarme una experiencia excepcional. Desde el momento en que me puse en contacto con ellos, su equipo demostró un profesionalismo y una atención al cliente sin igual.",
    imagen: "images/4.jpg"
}
]

let reviewActual=0

let img            = document.getElementById("imagenPerson")
let mainName       = document.getElementById("Nombre")
let Position       = document.getElementById("Posicion")
let comentario     = document.getElementById("texto")
let btnIzquiero    = document.getElementById("btn-left")
let btnDerecho     = document.getElementById("btn-right")
let btnCualquiera  = document.getElementById("cualquiera")

window.addEventListener("DOMContentLoaded",()=>{
    muestraPersona(reviewActual)
})

function muestraPersona(persona){
    const item              = review[persona]
    img.src                 = item.imagen
    mainName.textContent    = (item.nombre)
    Position.textContent    = (item.posicion)
    comentario.textContent  = (item.comentario)
    
}

btnIzquiero.addEventListener("click",()=>{
    reviewActual--
    if (reviewActual<0){reviewActual=3}
    muestraPersona(reviewActual)
    
})


btnDerecho.addEventListener("click",()=>{
    reviewActual++
    if (reviewActual>review.length-1){reviewActual=0}
    muestraPersona(reviewActual)
    
})

btnCualquiera.addEventListener("click", ()=>{
    let cualquiera     = Math.floor(Math.random()*4)
    muestraPersona(cualquiera)
})