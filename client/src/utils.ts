import { PokemonType } from "./types";

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const getPokemonNameByLanguage = (
  pokemon: PokemonType,
  language: string
): string => {
  const nameKey = language.toLowerCase() as keyof typeof pokemon.name;
  return pokemon.name[nameKey];
};
