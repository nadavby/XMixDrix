import React, { useState } from 'react';
import Board from './components/Board';
import GameResult from './components/GameResult';
import './App.css';

const App: React.FC = () => {
  const [gameResult, setGameResult] = useState<string | null>(null);
  const [resetGame, setResetGame] = useState<boolean>(false);

  const handleGameEnd = (result: string): void => {
    setGameResult(result);
  };

  const handlePlayAgain = (): void => {
    setGameResult(null);
    setResetGame(!resetGame);
  };

  return (
    <div className="App">
      <h1>X Mix Drix</h1>
      <Board onGameEnd={handleGameEnd} reset={resetGame} />
      {gameResult && (
        <GameResult result={gameResult} onPlayAgain={handlePlayAgain} />
      )}
    </div>
  );
};

export default App; 