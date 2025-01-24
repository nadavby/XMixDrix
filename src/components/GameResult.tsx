import React from 'react';
import '../styles/GameResult.css';

interface GameResultProps {
  result: string;
  onPlayAgain: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ result, onPlayAgain }) => {
  return (
    <div className="game-result">
      <h2>{result === 'draw' ? "It's a Draw!" : `Player ${result} Wins!`}</h2>
      <button className="reset-button" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
};

export default GameResult; 