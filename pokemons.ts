export class Pokemon {
  nom: string;
  pokedexId: number;
  stats: {
    pv: number;
    att: number;
    def: number;
    attspe: number;
    defspe: number;
  };

  constructor(pokemon?: Partial<Pokemon>) {
    Object.assign(this, pokemon);
  }
}

export class PokemonBuilder {
  pokedexId = 0;
  pokemon: Pokemon;

  constructor() {
    this.pokemon = new Pokemon();
  }

  create(nom: string, pv, att, def, attspe, defspe) {
    return new Pokemon({
      pokedexId: ++this.pokedexId,
      nom,
      stats: {
        att,
        attspe,
        def,
        defspe,
        pv,
      },
    });
  }
}

const pb = new PokemonBuilder();

export const POKEMONS: Pokemon[] = [
  pb.create('carapuce', 50, 10, 5, 8, 6),
  pb.create('salameche', 50, 15, 5, 10, 3),
  pb.create('bulbizare', 60, 8, 8, 12, 12),
];
