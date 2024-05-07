export interface Hits {
  objectID: string;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  id: number;
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    SpAttack: number;
    SpDefense: number;
    Speed: number;
  };
  image: string;
  imageUrl: string;
  game_versions: string[];
}

export interface PokemonType {
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    SpAttack: number;
    SpDefense: number;
    Speed: number;
  };
  imageUrl: string;
}
