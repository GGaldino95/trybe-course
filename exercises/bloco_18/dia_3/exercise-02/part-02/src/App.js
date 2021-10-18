import React from 'react'

function Name({ name, onNameChange }) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
};

// Receba "animal" e "onAnimalChange" como  props nesse componente;
function FavoriteAnimal({ animal, onAnimalChange }) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  );
};

function Display({ name, animal }) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>;
};

function App() {
  // Inclua um useState para o "animal"
  const [animal, setAnimal] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    <form>
      <Name name={name} onNameChange={(event) => setName(event.target.value)} />
      <FavoriteAnimal animal={animal} onAnimalChange={(event) => setAnimal(event.target.value)} />
      <Display name={name} animal={animal} />
    </form>
  );
};

export default App;
