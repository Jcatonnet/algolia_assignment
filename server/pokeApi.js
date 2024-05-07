import fetch from "node-fetch";

export const fetchPokemonData = async (pokemonId) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const imageUrl = data.sprites.front_default;
    const gameVersions = data.game_indices.map((game) => game.version.name);
    return { imageUrl, gameVersions };
  } catch (error) {
    console.error("Error fetching data from PokéAPI:", error);
    return { imageUrl: null, gameVersions: [] };
  }
};
