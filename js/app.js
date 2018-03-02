let container = document.getElementsByClassName('container')[0];

function handleResponse(data){
  console.log(data.pokemon_entries);
  let pokemonColection = data.pokemon_entries;
  let paint = " ";
  let method= pokemonColection.forEach(item =>{
    let species = item.pokemon_species
    console.log(species);
    let name = species.name
    console.log(name);
    let url = species.url
    console.log(url);

    paint +=
  `<div class="card col s3">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="https://dummyimage.com/120x100/000/fff">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${name}<i class="material-icons right">more_vert</i></span>
        <p><a href="#">${url}</a></p>
      </div>
  </div>`
  })

  container.innerHTML = paint;
}
$.ajax({
    url: `https://pokeapi.co/api/v2/pokedex/1/`
}).done(handleResponse);
