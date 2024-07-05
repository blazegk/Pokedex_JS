const POKE_API = {};

function convertPokemon(pokeApiPokemon) {
  const POKEMON = new Pokemon();
  POKEMON.name = pokeApiPokemon.name;
  POKEMON.id = pokeApiPokemon.id
  POKEMON.types = pokeApiPokemon.types[0].type.name;
  POKEMON.types = pokeApiPokemon.types.map((type) => type.type.name);
  POKEMON.mainType = pokeApiPokemon.types[0].type.name;
  POKEMON.picture = pokeApiPokemon.sprites.front_default;
  POKEMON.habilities = pokeApiPokemon.abilities.map((ability) => ability.ability.name);
  POKEMON.height = pokeApiPokemon.height;
  POKEMON.weight = pokeApiPokemon.weight;
  POKEMON.stats.health = pokeApiPokemon.stats[0].base_stat
  POKEMON.stats.atk = pokeApiPokemon.stats[1].base_stat
  POKEMON.stats.def = pokeApiPokemon.stats[2].base_stat
  POKEMON.stats.specialAtk = pokeApiPokemon.stats[3].base_stat
  POKEMON.stats.specialDef = pokeApiPokemon.stats[4].base_stat
  POKEMON.stats.speed = pokeApiPokemon.stats[5].base_stat
  POKEMON.stats.total = (POKEMON.stats.health + POKEMON.stats.def + POKEMON.stats.atk + POKEMON.stats.specialAtk + POKEMON.stats.specialDef + POKEMON.stats.speed)



  return POKEMON;
}

POKE_API.getPokemonInfo = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokemon);
};

POKE_API.getPokemonsList = (limit = 2, offset = 0) => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((json) => json.results)
    .then((pokemonsArray) => pokemonsArray.map(POKE_API.getPokemonInfo))
    .then((pokemonDetailsArray) => Promise.all(pokemonDetailsArray))
    .catch((error) => console.error(error));
};