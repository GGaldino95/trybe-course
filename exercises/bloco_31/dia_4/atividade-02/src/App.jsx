import './App.css';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';

const quadrado = 'https://avatars.githubusercontent.com/u/51808343?s=280&v=4';
const socket = io.connect('http://localhost:4000');

function App() {
  const [xPosition, setxPosition] = useState(0);
  const [yPosition, setyPosition] = useState(0);
  const [xInitialPosition, setxInitialPosition] = useState(0);
  const [yInitialPosition, setyInitialPosition] = useState(0);
  const [startDisable, setstartDisable] = useState();
  const [trybeon, settrybeon] = useState(false);

  socket.on('initialPosition', ({ initialXSocket, initialYSocket }) => {
    console.log('initialXSocket', initialXSocket, 'initialYSocket', initialYSocket);
    setxPosition(initialXSocket);
    setyPosition(initialYSocket);
    setxInitialPosition(initialXSocket);
    setyInitialPosition(initialYSocket);
  });

  socket.on('settrybeon', (trybeonSocket) => {
    settrybeon(trybeonSocket);
  });

  socket.on('setstartDisable', (startDisableSocket) => {
    setstartDisable(startDisableSocket);
  });

  socket.on('randomBack', ({ randomXSocket, randomYSocket }) => {
    setxPosition(randomXSocket);
    setyPosition(randomYSocket);
  });

  socket.on('restartBack', ({ xInitialPositionSocket, yInitialPositionSocket }) => {
    setxPosition(xInitialPositionSocket);
    setyPosition(yInitialPositionSocket);
  });

  function iniciar() {
    settrybeon(true);
    setstartDisable(true);
  }

  useEffect(() => {
    socket.emit('iniciar', trybeon);
  }, [trybeon]);

  useEffect(() => {
    socket.emit('startDisable', startDisable);
  }, [startDisable]);

  function reiniciar() {
    setxPosition(xInitialPosition);
    setyPosition(yInitialPosition);
    socket.emit('restart', { xInitialPosition, yInitialPosition });
  }

  function click() {
    console.log('click');
    const randomX = parseInt(Math.random() * 150, 10);
    const randomY = parseInt(Math.random() * 150, 10);
    setxPosition(randomX);
    setyPosition(randomY);
    socket.emit('random', { randomX, randomY });
  }

  const margin = { 'margin-top': xPosition, 'margin-left': yPosition };

  console.log('trybeon', trybeon, 'xPosition', xPosition, 'yPosition', yPosition);

  return (
    <div className="App">
      <h1>Saia do seu Quadrado</h1>
      {/* <h1>X = { xPosition } / Y = { yPosition }</h1> */}
      <div className="flex-container">
        <div>
          <button type="button" onClick={iniciar} disabled={startDisable}>
            Iniciar Jogo
          </button>
        </div>
        <div>
          <button type="button" onClick={reiniciar}>Reiniciar Jogo</button>
        </div>
      </div>

      <div>
        {trybeon && (
          <div onClick={click}>
            <img src={quadrado} alt="..." style={margin} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
