import { abilities } from './interfaceChild/pokeAbilities.js';
import { type } from './interfaceChild/pokeType.js';
import { Sprite } from './interfaceChild/pokeSprites.js';
import { baseStat } from './interfaceChild/pokeStat.js';

export interface Pokeinterface {
  abilities: abilities[];
  base_experience: number;
  forms: string[];
  game_indice: string[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: string[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: [];
  sprites: Sprite;
  stats: baseStat[];
  types: type[];
  weight: number;
}
