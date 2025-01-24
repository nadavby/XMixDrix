import React from 'react';

interface GameResultProps {
  result: string;
  onPlayAgain: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ result, onPlayAgain }) => {
  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h2 className="h3 text-secondary mb-3">
        {result === 'draw' ? "It's a Draw!" : `Player ${result} Wins!`}
      </h2>
      <button 
        className="btn btn-success px-4 py-2 shadow-sm"
        onClick={onPlayAgain}
      >
        Play Again
      </button>
    </div>
  );
};

export default GameResult; 