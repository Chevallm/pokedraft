// Import stylesheets
import { POKEMONS } from './src/pokemons';
import { UIManager } from './src/ui-manager';
import './style.css';

const player = {};

// Write TypeScript code!
const uiManager = new UIManager();

const pickRef = document.getElementsByClassName('pick')[0];
//pickRef.appendChild(uiManager.createPokemonCard(POKEMONS[i]));

// start
pick();

function pick() {
  showPickView();
}

function showPickView() {
  const ref = document.getElementsByClassName('pick')[0];
  for (let i = 0; i < 3; i++) {
    const rand = Math.floor(Math.random() * (151 - 0)) + 0;
    const pokemon = POKEMONS[rand];
    const element = uiManager.createPokemonCard(pokemon);
    ref.appendChild(element);
  }
}
