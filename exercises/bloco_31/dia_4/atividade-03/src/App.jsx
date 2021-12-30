import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');

function App() {
  const [p0, setP0] = useState('');
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [p3, setP3] = useState('');
  const [p4, setP4] = useState('');
  const [p5, setP5] = useState('');
  const [p6, setP6] = useState('');
  const [p7, setP7] = useState('');
  const [p8, setP8] = useState('');
  const [lock, setLock] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [loss, setLoss] = useState(false);
  const [draw, setDraw] = useState(false);
  const [victory, setVictory] = useState(false);
  const [privateRoom, setPrivateRoom] = useState();

  socket.on('updateP0', (symbolBack) => {
    setP0(symbolBack);
    setLock(false);
  });

  socket.on('updateP1', (symbolBack) => {
    setP1(symbolBack);
    setLock(false);
  });

  socket.on('updateP2', (symbolBack) => {
    setP2(symbolBack);
    setLock(false);
  });

  socket.on('updateP3', (symbolBack) => {
    setP3(symbolBack);
    setLock(false);
  });

  socket.on('updateP4', (symbolBack) => {
    setP4(symbolBack);
    setLock(false);
  });

  socket.on('updateP5', (symbolBack) => {
    setP5(symbolBack);
    setLock(false);
  });

  socket.on('updateP6', (symbolBack) => {
    setP6(symbolBack);
    setLock(false);
  });

  socket.on('updateP7', (symbolBack) => {
    setP7(symbolBack);
    setLock(false);
  });

  socket.on('updateP8', (symbolBack) => {
    setP8(symbolBack);
    setLock(false);
  });

  socket.on('symbolO', () => {
    setSymbol('O');
  });

  socket.on('symbolX', () => {
    setSymbol('X');
  });

  socket.on('loss', () => {
    setLoss(true);
    setLock(true);
  });

  function clickP0() {
    if (!lock && p0 === '') {
      socket.emit('p0', { symbol, p0 });
      setP0(symbol);
      setLock(true);
    }
  }

  function clickP1() {
    if (!lock && p1 === '') {
      socket.emit('p1', { symbol, p1 });
      setP1(symbol);
      setLock(true);
    }
  }

  function clickP2() {
    if (!lock && p2 === '') {
      socket.emit('p2', { symbol, p2 });
      setP2(symbol);
      setLock(true);
    }
  }

  function clickP3() {
    if (!lock && p3 === '') {
      socket.emit('p3', { symbol, p3 });
      setP3(symbol);
      setLock(true);
    }
  }

  function clickP4() {
    if (!lock && p4 === '') {
      socket.emit('p4', { symbol, p4 });
      setP4(symbol);
      setLock(true);
    }
  }

  function clickP5() {
    if (!lock && p5 === '') {
      socket.emit('p5', { symbol, p5 });
      setP5(symbol);
      setLock(true);
    }
  }

  function clickP6() {
    if (!lock && p6 === '') {
      socket.emit('p6', { symbol, p6 });
      setP6(symbol);
      setLock(true);
    }
  }

  function clickP7() {
    if (!lock && p7 === '') {
      socket.emit('p7', { symbol, p7 });
      setP7(symbol);
      setLock(true);
    }
  }

  function clickP8() {
    if (!lock && p8 === '') {
      socket.emit('p8', { symbol, p8 });
      setP8(symbol);
      setLock(true);
    }
  }

  function X() {
    setSymbol('X');
    socket.emit('symbolX', 'X');
    setPrivateRoom(parseInt(Math.random() * 1000, 10));
  }

  function O() {
    setSymbol('O');
    socket.emit('symbolO', 'O');
    setPrivateRoom(parseInt(Math.random() * 1000, 10));
  }

  useEffect(() => {
    console.log(privateRoom);
    socket.emit('privateRoom', privateRoom);
  }, [privateRoom]);

  useEffect(() => {
    const victoryLine1 = p0 === symbol && p1 === symbol && p2 === symbol;
    const victoryLine2 = p3 === symbol && p4 === symbol && p5 === symbol;
    const victoryLine3 = p6 === symbol && p7 === symbol && p8 === symbol;

    const victoryRow1 = p0 === symbol && p3 === symbol && p6 === symbol;
    const victoryRow2 = p1 === symbol && p4 === symbol && p7 === symbol;
    const victoryRow3 = p2 === symbol && p5 === symbol && p8 === symbol;

    const victoryDiagonal1 = p0 === symbol && p4 === symbol && p8 === symbol;
    const victoryDiagonal2 = p2 === symbol && p4 === symbol && p6 === symbol;

    setVictory(
      victoryLine1
        || victoryLine2
        || victoryLine3
        || victoryRow1
        || victoryRow2
        || victoryRow3
        || victoryDiagonal1
        || victoryDiagonal2,
    );

    if (victory) {
      setLock(true);
      socket.emit('victory', '');
    }

    if (!victory) {
      const drawCondition = p0 !== ''
        && p1 !== ''
        && p2 !== ''
        && p3 !== ''
        && p4 !== ''
        && p5 !== ''
        && p6 !== ''
        && p7 !== ''
        && p8 !== '';
      if (drawCondition) setDraw(true);
    }
  }, [p0, p1, p2, p3, p4, p5, p6, p7, p8, symbol, victory, loss, draw]);

  return (
    <div className="App">
      <h1>Jogo da Velha</h1>
      {symbol && (
        <div>
          <div>
            O seu símbolo é o
            {' '}
            {symbol}
          </div>
          <p />
          <table>
            <tr>
              <td onClick={clickP0}>{p0}</td>
              <td onClick={clickP1}>{p1}</td>
              <td onClick={clickP2}>{p2}</td>
            </tr>
            <tr>
              <td onClick={clickP3}>{p3}</td>
              <td onClick={clickP4}>{p4}</td>
              <td onClick={clickP5}>{p5}</td>
            </tr>
            <tr>
              <td onClick={clickP6}>{p6}</td>
              <td onClick={clickP7}>{p7}</td>
              <td onClick={clickP8}>{p8}</td>
            </tr>
          </table>
          <p />
          <div>{victory && <div>Vitória</div>}</div>
          <div>{loss && <div>Derrota</div>}</div>
          <div>{draw && !victory && !loss && <div>Empate</div>}</div>
        </div>
      )}
      {!symbol && (
        <div>
          <div>Escolha o símbolo</div>
          <span onClick={X}>X</span>
          {' '}
          ou
          {' '}
          <span onClick={O}>O</span>
        </div>
      )}
    </div>
  );
}

export default App;
