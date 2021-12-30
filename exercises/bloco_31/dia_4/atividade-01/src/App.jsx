import './App.css';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';

const socket = io.connect('http://localhost:4000');

const inicialPrice = {
  cellphone: 0,
  tv: 0,
  notebook: 0,
  cellphoneWinner: '',
  tvWinner: '',
  notebookWinner: '',
};

function App() {
  const [cellphone, setCellphone] = useState(inicialPrice.cellphone);
  const [tv, setTv] = useState(inicialPrice.tv);
  const [notebook, setNotebook] = useState(inicialPrice.notebook);
  const [cellphoneButton, setCellphoneButton] = useState('Dar um lance');
  const [cellphoneDisabled, setCellphoneDisabled] = useState(false);
  const [tvButton, setTvButton] = useState('Dar um lance');
  const [tvDisabled, setTvDisabled] = useState(false);
  const [notebookButton, setNotebookButton] = useState('Dar um lance');
  const [notebookDisabled, setNotebookDisabled] = useState(false);
  const [name, setName] = useState();
  const [cellphoneWinner, setCellphoneWinner] = useState('');
  const [tvWinner, setTvWinner] = useState('');
  const [notebookWinner, setNotebookWinner] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function increaseCellphone() {
    if (cellphone < 100) socket.emit('updateCellphonePrice', { cellphone, name });
  }

  useEffect(() => {
    socket.on('updateCellphonePriceForAll', (newcellphone) => {
      setCellphone(newcellphone);
    });
  }, [cellphone]);

  socket.on('cellphoneWinner', (name) => {
    setCellphoneWinner(name);
    setCellphoneButton('Produto arrematado');
    setCellphoneDisabled(true);
  });

  function increaseTv() {
    if (tv < 100) socket.emit('updateTvPrice', { tv, name });
  }

  useEffect(() => {
    socket.on('updateTvPriceForAll', (newTv) => {
      setTv(newTv);
    });
  }, [tv]);

  socket.on('tvWinner', (name) => {
    setTvWinner(name);
    setTvButton('Produto arrematado');
    setTvDisabled(true);
  });

  function increaseNotebook() {
    if (notebook < 100) socket.emit('updateNotebookPrice', { notebook, name });
  }

  useEffect(() => {
    socket.on('updateNotebookPriceForAll', (newNotebook) => {
      setNotebook(newNotebook);
    });
  }, [notebook]);

  socket.on('notebookWinner', (name) => {
    setNotebookWinner(name);
    setNotebookButton('Produto arrematado');
    setNotebookDisabled(true);
  });

  return (
    <div className="App">
      <h1>Leilão de Centavos</h1>
      Nome:
      {' '}
      <input type="text" name="name" onChange={handleChange} />
      <p />
      <div className="flex-container">
        <div>
          <div>Celular</div>
          <div>
            R$
            {cellphone}
          </div>
          <button type="button" onClick={increaseCellphone} disabled={cellphoneDisabled}>
            {cellphoneButton}
          </button>
          <div>{cellphoneWinner}</div>
        </div>
        <div>
          <div>TV</div>
          <div>
            R$
            {tv}
          </div>
          <button type="button" onClick={increaseTv} disabled={tvDisabled}>
            {tvButton}
          </button>
          <div>{tvWinner}</div>
        </div>
        <div>
          <div>Notebook</div>
          <div>
            R$
            {notebook}
          </div>
          <button type="button" onClick={increaseNotebook} disabled={notebookDisabled}>
            {notebookButton}
          </button>
          <div>{notebookWinner}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
