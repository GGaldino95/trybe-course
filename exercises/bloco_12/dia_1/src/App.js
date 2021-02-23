import './App.css';
import Pokedex from './Pokedex.js';
import data from './data.js';

function App() {
  return (
    <Pokedex pokemonData={data}/>
  );
}

export default App;

/*
import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
*/