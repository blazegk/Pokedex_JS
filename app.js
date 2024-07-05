const btnLoad = document.getElementById("btnLoad")
const pokeList = document.getElementById("pokeList")
const LIMIT = 2;
let offset = 0;

function loadPokemons(offset, limit) {

  POKE_API.getPokemonsList(limit, offset).then((pokemonList = []) => {
    pokeList.innerHTML += pokemonList.map((pokemon) => `
      <li class="pokemon-card ${pokemon.mainType}">
        <img class="pokemon-picture" src="${pokemon.picture}"
          alt="Bulbasaur">
        <h2>${pokemon.name} - ID ${pokemon.id}</h2>
        <p>${pokemon.mainType}</p>
      </li> 
    `).join('')


  })

}

loadPokemons(offset, LIMIT);



btnLoad.addEventListener("click", () => {
  offset += LIMIT
  loadPokemons(offset, LIMIT)


})
