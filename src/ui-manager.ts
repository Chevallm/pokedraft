import { Pokemon } from './pokemons';

export class UIManager {
  constructor() {}

  createPokemonCard(pokemon: Pokemon) {
    const d = document.createElement('div');
    d.innerHTML = `
    <div class="pokemon-pick">
        <img
          src="https://stackblitz.com/files/typescript-qsqwua/github/Chevallm/pokedraft/master/images/${pokemon.pokedexId}.png"
        />
        <dt>Nom</dt>
        <dd>${pokemon.nom}</dd>
        <dt>Stats</dt>
        <dt>pv</dt>
        <dd>${pokemon.pv}</dd>
        <dt>att</dt>
        <dd>${pokemon.att}</dd>
        <dt>def</dt>
        <dd>${pokemon.def}</dd>
        <dt>attspé</dt>
        <dd>${pokemon.attspe}</dd>
        <dt>defspé</dt>
        <dd>${pokemon.defspe}</dd>
      </div>
    `;
    d.style.backgroundColor = '';
    return d;
  }
}
