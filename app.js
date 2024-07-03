const btnLoad = document.getElementById("btnLoad")
const pokeList = document.getElementById("pokeList")
const limit = 12;

let offset = 0;

POKE_API.getPokemonsList(limit, offset).then((pokemonList = []) => {
  pokeList.innerHTML += pokemonList.map((pokemon) => `
<li>${pokemon.name}</li>`).join('')
})
