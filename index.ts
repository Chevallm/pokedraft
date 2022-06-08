// Import stylesheets
import { POKEMONS } from './src/pokemons';
import { UIManager } from './src/ui-manager';
import './style.css';

// Write TypeScript code!
const uiManager = new UIManager();

const pickRef = document.getElementsByClassName('pick')[0];
for (let i = 0; i < 151; i++) {
  pickRef.appendChild(uiManager.createPokemonCard(POKEMONS[i]));
}
