interface NameUrlPair {
  name: string;
  url: string;
}

interface Ability {
  ability: NameUrlPair;
  is_hidden: boolean;
  slot: number;
}

interface Item {
  item: NameUrlPair;
}

interface Move {
  move: NameUrlPair;
}

interface SimpleSprite {
  front_default: string;
}

interface Sprites extends SimpleSprite {
  other: OtherSprites;
}

interface OtherSprites {
  dream_world: SimpleSprite;
  'official-artwork': SimpleSprite;
}

interface TypeOfPokemon {
  type: NameUrlPair;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrlPair[];
  height: number;
  held_items: Item[];
  id: number;
  moves: Move[];
  name: string;
  species: NameUrlPair;
  sprites: Sprites;
  types: TypeOfPokemon[];
  weight: number;
}

interface Language {
  name: string,
  url: string;
}

interface VersionGroup {
  name: string,
  url: string;
}

interface FlavorText {
  flavor_text: string;
  language: Language;
  version_group: VersionGroup;
}

interface ContestEffect {
  url: string;
}

interface ContestType {
  name: string,
  url: string;
}

interface DamageClass {
  name: string,
  url: string;
}

interface EffectEntries {
  effect: string,
  language: Language[],
  short_effect: string;
}

export interface MoveObject {
  accuracy: number,
  context_combos?: string,
  contest_effect: ContestEffect,
  contest_type: ContestType[],
  damage_class: DamageClass[],
  effect_chance?: number,
  effect_changes: []
  effect_entries: EffectEntries[],
  flavor_text_entries: FlavorText[];
}
