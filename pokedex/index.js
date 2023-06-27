const URL = 'https://pokeapi.co/api/v2/pokemon/'

const searchInput = document.getElementById('search')
const pokedexContainer = document.getElementById('pokedex')
const boton = document.getElementById('boton')


async function searchPokemon() {
   
    const searchedPokemon = searchInput.value.toLowerCase();

    try {
        
        const response = await fetch(URL + searchedPokemon)
        if (!response.ok) {
           
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `No se encontro ningun Pokemon llamado  "${searchedPokemon}"`,
                
              })
              searchInput.value=""
            return;
        }

      
        const data = await response.json()
		const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 1500,
		timerProgressBar: true,
		didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

		Toast.fire({
		icon: 'success',
		title: 'Se Encontro un Pokemon'
})
       
        pokedexContainer.innerHTML = 
        `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Numero: ${data.id}</p>
            <p>Altura: ${data.height / 10}m</p>
            <p>Peso: ${data.weight / 10}kg</p>
         
        `
        searchInput.value=""
    } catch (error) {
    
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Ingrese nombre o numero de un Pokemon`,
            
          })
        
    }
}
boton.addEventListener('click', searchPokemon)

searchInput.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
   
    event.preventDefault()

    document.getElementById('boton').click()
  }
})