import React, { useState } from 'react';
import GameBoard from './GameBoard';

function TicTacToe() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const toggleActivePlayer = () => setActivePlayer(activePlayer === 1 ? 2 : 1);

  const updateState = (cellClicked) => {
    if (gameBoard[cellClicked] !== 0) return false;

    let newGameBoard = [...gameBoard];
    newGameBoard[cellClicked] = activePlayer;
    setGameBoard(newGameBoard);
    toggleActivePlayer();
  };

  const victoryArchivedInLine = () => {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1] &&
        gameBoard[i + 1] === gameBoard[i + 2] &&
        gameBoard[i] !== 0
      )
        return true;
    }
    return false;
  };

  const victoryArchivedInColumn = () => {
    for (let i = 0; i <= 2; i++) {
      if (
        gameBoard[i] === gameBoard[i + 3] &&
        gameBoard[i + 3] === gameBoard[i + 6] &&
        gameBoard[i] !== 0
      )
        return true;
    }
    return false;
  };

  const victoryArchivedInDiagonals = () => {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) return true;
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) return true;
    return false;
  };

  const victoryArchieved = () => {
    return (
      victoryArchivedInLine() || victoryArchivedInColumn() || victoryArchivedInDiagonals()
    );
  };

  const resetGame = () => {
    setActivePlayer(1);
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const renderButton = () => {
    return (
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }

  if (victoryArchieved()) {
    return (
      <>
        <h1>Fim de Jogo</h1>
        {renderButton()}
      </>
    );
  }
  return (
    <>
      {renderButton()}
      <GameBoard gameState={gameBoard} updateGame={updateState} />
    </>
  );
};

export default TicTacToe;
