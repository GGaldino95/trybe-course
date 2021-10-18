import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

function GameCell({ content = 0, onClick, id }) {
  if (content === 1) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        onClick={onClick}
      >
        <img data-testid={`cell_${id}_image`} alt="X" src={xImage} />
      </div>
    );
    } else if (content === 2) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        onClick={onClick}
      >
        <img data-testid={`cell_${id}_image`} alt="O" src={oImage} />
      </div>
    );
  }

  return <div data-testid={`cell_${id}`} className="game-cell" onClick={onClick} />;
}

GameCell.defaultProps = {
  content: 0,
};

GameCell.propTypes = {
  content: PropTypes.oneOf([0, 1, 2]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GameCell;
