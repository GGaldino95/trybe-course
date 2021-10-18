import React, { useState, useEffect } from 'react';

function Greeting({ initialName = '' }) {
  // Inicialize o estado com o valor que vem do localStorage;
  const localStorageName = window.localStorage.getItem('name') || initialName;
  // Substitua a variável "name" por uma variável no estado, utilizando useState;
  const [name, setName] = useState(localStorageName);

  // Utilize o hook useEffect para atualizar a propriedade "name" no localStorage quando o estado for alterado;
  useEffect(() => {
    window.localStorage.setItem('name', name);
  }, [name]);

  function handleChange(event) {
    // Atualize o valor do estado com base no que está em event.target.value;
    setName(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
};

function App() {
  return <Greeting />;
};

export default App;
