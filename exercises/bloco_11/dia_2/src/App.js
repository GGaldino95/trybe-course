import './App.css';
import Pokedex from './Pokedex.js';
import data from './data.js';

function App() {
  return (
    <Pokedex pokemonData={data}/>
  );
}

export default App;
