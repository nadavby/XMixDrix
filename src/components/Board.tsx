import React, { useState, useEffect } from 'react';
import Square from './Square';
import '../styles/Board.css';

interface BoardProps {
  onGameEnd: (result: string) => void;
  reset: boolean;
}

type SquareValue = 'X' | 'O' | null;

const Board: React.FC<BoardProps> = ({ onGameEnd, reset }) => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [gameEnded, setGameEnded] = useState<boolean>(false);

  useEffect(() => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameEnded(false);
  }, [reset]);

  const calculateWinner = (squares: SquareValue[]): SquareValue => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number): void => {
    if (squares[i] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setGameEnded(true);
      onGameEnd(winner);
    } else if (newSquares.every(square => square)) {
      setGameEnded(true);
      onGameEnd('draw');
    }
  };

  const getTurnMessage = (): string => {
    return `Current turn: Player ${xIsNext ? 'X' : 'O'}`;
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {!gameEnded && (
        <div className="h3 fw-bold text-secondary mb-4">
          {getTurnMessage()}
        </div>
      )}
      <div className="game-board p-3 rounded-4 shadow">
        <div className="board-grid">
          {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => handleClick(i)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board; 