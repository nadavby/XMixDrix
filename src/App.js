import React, { useState } from 'react';
import Board from './components/Board';
import GameResult from './components/GameResult';
import './App.css';

function App() {
  const [gameResult, setGameResult] = useState(null);
  const [resetGame, setResetGame] = useState(false);

  const handleGameEnd = (result) => {
    setGameResult(result);
  };

  const handlePlayAgain = () => {
    setGameResult(null);
    setResetGame(!resetGame); // Toggle to reset the board
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
}

export default App;
