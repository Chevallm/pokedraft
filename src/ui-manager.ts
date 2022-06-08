import { Pokemon } from './pokemons';

const typeColors = {
  Grass: '#68BC2D',
  Fire: '#C72100',
  Water: '#2F91F2',
  Bug: '#9EAD19',
  Normal: '#C7C2B9',
  Poison: '#8E408F',
  Electric: '#F9B616',
  Ground: '#D1B055',
  Fairy: '#F6B2F6',
  Flying: '#92A5F2',
  Fighting: '#81341D',
  Psychic: '#ED4882',
  Rock: '#B69E54',
  Steel: '#B3B3C2',
  Ice: '#97E3FB',
  Ghost: '#5F5FB1',
};

export class UIManager {
  constructor() {}

  createPokemonCard(pokemon: Pokemon) {
    const d = document.createElement('div');
    d.innerHTML = `<div class="pokemon-pick" style="background-image: linear-gradient(110deg, ${
      typeColors[pokemon.type1]
    } 50%, ${typeColors[pokemon.type2 || pokemon.type1]} 50%);">
        <img class="pokeimage"
          src="https://stackblitz.com/files/typescript-qsqwua/github/Chevallm/pokedraft/master/images/${
            pokemon.pokedexId
          }.png"
        />
        <dt>Nom</dt>
        <dd>${pokemon.nom}</dd>
        <dt>PV</dt>
        <dd>${pokemon.pv}</dd>
        <dt>Attaque</dt>
        <dd>${pokemon.att}</dd>
        <dt>Défense</dt>
        <dd>${pokemon.def}</dd>
        <dt>Attaque Spéciale</dt>
        <dd>${pokemon.attspe}</dd>
        <dt>Défense Spéciale</dt>
        <dd>${pokemon.defspe}</dd>
        <br/>
        <button>Pick</button>
      </div>
    `;
    return d;
  }
}
