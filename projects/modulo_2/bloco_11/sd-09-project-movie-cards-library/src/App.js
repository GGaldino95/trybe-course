import React from 'react';
import Header from './components/Header';
import Movielist from './components/MovieList';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Movielist movies={ data } />
    </div>
  );
}

export default App;
