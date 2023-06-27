
let boton=document.getElementById("mainButton")
let average=document.getElementById("MuestraPromedio")
let estudiante=JSON.parse(localStorage.getItem("Estu"))||[]
let UsuarioEditado = null

class Estudiante{
	constructor(name, LastName, regNumber, classRoom, score, id){
		this.name=name
		this.LastName=LastName
		this.regNumber=regNumber
		this.classRoom=classRoom
		this.id=id
		
		this.score=parseInt(score)
	}
}
const formulario = document.querySelector('#RegistroEstudiante')

formulario.addEventListener("submit",(e)=>{
	e.preventDefault()
	
	const nombre=e.target.name.value.trim()
	const apellido=e.target.apellido.value.trim()
	const matricula=e.target.matricula.value.trim()
	const curso=e.target.curso.value.trim()
	const nota=e.target.nota.value.trim()
	const id=crypto.randomUUID()
	const Student = new Estudiante (nombre,apellido,matricula,curso,nota,id)

	if (nombre ==="" || apellido ==="" || matricula ==="" || curso==="" ||nota==="" ){
		Swal.fire(
			'Error!',
			'Todos los campos deben ser llenados!',
			'error'
		  )	
	} else if (UsuarioEditado){
		
		Swal.fire({
			title: 'Desea guardar los cambios?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Editar',
			denyButtonText: `No Editar`,
		  }).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
			  Swal.fire('Estudiante Editado!', '', 'success')
			  const newArray = estudiante.map((User)=>User.id===UsuarioEditado.id ?
				  {
					  ...Student,
					  id: UsuarioEditado.id
				  }:User
				  )

		  
				  estudiante=newArray
				  localStorage.setItem("Estu",JSON.stringify(estudiante))
				  UsuarioEditado=null
				  boton.textContent="Guardar"
				  dibujaTabla()
				  calculaPromedio(estudiante)
				  average.textContent=(calculaPromedio(estudiante))
			} else if (result.isDenied) {
			  Swal.fire('Estudiante no fue editado', '', 'info')
			}
		  })
		

		
	}else{
		Swal.fire(
			'Excelente!',
			'Estudiante Registrado!',
			'success'
		  )
		    
		  estudiante.push(Student)
		  localStorage.setItem("Estu",JSON.stringify(estudiante))
	}
	dibujaTabla()
	formulario.reset()
	calculaPromedio(estudiante)
	average.textContent=(calculaPromedio(estudiante))
	
})



let calculaPromedio=(estudiante)=>{
	
	let suma=0, numero=estudiante.length
	for (let i=0; i<numero; i++){
		suma+=estudiante[i].score
	}
	return (suma/numero).toFixed(2)	

}


let tablaPrincipal=document.querySelector("#mainTable")


function dibujaTabla(){
	tablaPrincipal.textContent=""
	estudiante.forEach((estudiante)=>{
		let fila=tablaPrincipal.insertRow(-1)
		

		let celdaNombre=fila.insertCell(0)
		celdaNombre.textContent=(estudiante.name)

		let celdaApellido=fila.insertCell(1)
		celdaApellido.textContent=(estudiante.LastName)

		let celdaMatricula=fila.insertCell(2)
		celdaMatricula.textContent=(estudiante.regNumber)

		let celdaCurso=fila.insertCell(3)
		celdaCurso.textContent=(estudiante.classRoom)

		let celdaNota=fila.insertCell(4)
		celdaNota.textContent=(estudiante.score)

		let Borrar=fila.insertCell(5)
		let celdaBorrar=document.createElement('button')
		Borrar.setAttribute('id',estudiante.id)
		celdaBorrar.textContent="Borrar"
		celdaBorrar.setAttribute('class', 'btn btn-danger btn-xs my-xs-btn')
		Borrar.appendChild(celdaBorrar)
		
		let Editar=fila.insertCell(6)
		let celdaEditar=document.createElement('button')
		Editar.setAttribute('id',estudiante.id)
		celdaEditar.textContent="Editar"
		celdaEditar.setAttribute('class', 'btn btn-warning btn-xs my-xs-btn')
		Editar.appendChild(celdaEditar)		
		
	})
}

/* function eliminarEstudiante(estudiante){
	let muestraEstudiante = JSON.parse(localStorage.getItem("informacionEstudiante"))
	let matriculaEliminada = estudiante.findIndex(elementoID => elementoID.regNumber ===estudiante.matricula)
	estudiante.splice(matriculaEliminada,1)
	localStorage.setItem("informacionEstudiante",JSON.stringify(estudiante))
	console.log(matriculaEliminada)
} */
	

document.addEventListener("DOMContentLoaded",() => {
		
		let muestraEstudiante = JSON.parse(localStorage.getItem("Estu"))
		muestraEstudiante.forEach(elementosEstudiantes => dibujaTabla(elementosEstudiantes))		
		//average.forEach(cifra=>calculaPromedio(cifra))
		average.textContent=calculaPromedio(JSON.parse(localStorage.getItem("Estu")))
		
}) 
 
 tablaPrincipal.addEventListener("click", (e)=>{
	if(e.target.classList.contains("btn-danger")){
		
		const id=e.target.parentElement.id
			Swal.fire({
			title: 'Seguro que desea borrar el estudiante?',
			text: "No podra restablecerlo",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, Borrar'
		}).then((result) => {
			if (result.isConfirmed) {
			Swal.fire(
				'Borrado!',
				'Usuario Borrado',
				'success'
				
			)
			e.target.parentElement.parentElement.remove()
			const newArray = estudiante.filter((estudiante)=>estudiante.id !==id)
			estudiante=newArray
			localStorage.setItem("Estu",JSON.stringify(estudiante))
			calculaPromedio(estudiante)
			average.textContent=(calculaPromedio(estudiante))
			}
		})
		}
	if(e.target.classList.contains("btn-warning")){
		const id=e.target.parentElement.id
		boton.textContent="Editar"
		UsuarioEditado=estudiante.find((estudiante)=>estudiante.id===id)
		//console.log(UsuarioEditado)
		formulario.name.value = UsuarioEditado.name
		formulario.apellido.value = UsuarioEditado.LastName
		formulario.matricula.value = UsuarioEditado.regNumber
		formulario.curso.value = UsuarioEditado.classRoom
		formulario.nota.value = UsuarioEditado.score
	}
 })
 