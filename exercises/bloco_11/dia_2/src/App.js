import './App.css';
import Pokemon from './Pokemon.js';
import Pokedex from './Pokedex.js';
import data from './data.js';

function App() {
  return (
    <main className="pokedex">
      <h1>Pokedex</h1>
      <section className="pokedex-container">
        {data.map(currentPokemon => <Pokemon key={currentPokemon.id} pokemon={currentPokemon} />)}
      </section>
    </main>
  );
}

export default App;
