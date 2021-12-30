import './App.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

function App() {
  const [messageList, setMessageList] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/getAll')
      .then((response) => response.json())
      .then((data) => setMessageList(data));
  }, []);

  socket.on('broadcast', ({ nameSocket, messageSocket }) => {
    fetch('http://localhost:4000/getAll')
      .then((response) => response.json())
      .then((data) => setMessageList(data));
  });

  function handleName(event) {
    setName(event.target.value);
  }

  function handleMessage(event) {
    setMessage(event.target.value);
  }

  async function handleClick() {
    await fetch('http://localhost:4000/insertNewMessage', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessageList(data);
        socket.emit('update', { name, message });
        setName('');
        setMessage('');
      });
  }

  return (
    <div className="App">
      <h1>Mural de Depoimentos</h1>
      {messageList
        && messageList.map((item) => (
          <div id="mess">
            id:
            {' '}
            {item.id}
            {' '}
            / user:
            {' '}
            {item.user}
            {' '}
            / message:
            {' '}
            {item.message}
          </div>
        ))}
      <p />
      <input type="text" value={name} onChange={handleName} />
      <input type="text" value={message} onChange={handleMessage} />
      <button type="button" onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default App;
