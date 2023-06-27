let pagina = 1

const btnSiguiente=document.getElementById('btnSiguiente')
const btnAnterior=document.getElementById('btnAnterior')


btnSiguiente.addEventListener('click', ()=>{
	
	if (pagina<1000)
	{
	pagina++
	cargaPeliculas()
	}
})
btnAnterior.addEventListener('click', ()=>{
	if (pagina>1){

		pagina--
		cargaPeliculas()
	}
})

const cargaPeliculas = async () =>{
	try {
		const resultado = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=f4361b58169192dc011e6bcf816ad95f&language=es-latam&page=${pagina}`)
		

		if (resultado.status ===200){
		const datos=await resultado.json()
		
		let peliculas=""

		datos.results.forEach(pelicula =>{
			peliculas +=  `
			<div class="pelicula"> 
				<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
			</div>
			<h3>${pelicula.title}</h3>`
		})

		document.getElementById("contenedor").innerHTML=peliculas 
		
	} else if(resultado.status ===404){
		console.log("No se encontró una pelicula")
	} else if(resultado.status===401){
		console.log("Ocurrió un error fatal")
	}
	}catch(error){
		console.log(error)
	}
}


cargaPeliculas()

