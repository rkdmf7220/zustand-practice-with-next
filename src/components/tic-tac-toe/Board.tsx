// "use client"

import Square from './Square';
import {calculateStatus, calculateTurns, calculateWinner} from "@/utils/calculate-winner";

interface IBoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
}

export default function Board({ xIsNext, squares, onPlay }: IBoardProps) {
  const player = xIsNext ? 'X' : 'O';
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const status = calculateStatus(winner, turns, player);

  const boardStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    width: 'calc(3 * 2.5rem)',
    height: 'calc(3 * 2.5rem)',
    border: "1px solid #999",
  }

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  }

  return (
      <div>
        <div style={{marginBottom: '0.5rem'}}>{status}</div>
        <div style={boardStyle}>
          {squares.map((square, squareIndex) => (
              <Square key={squareIndex} value={square} onSquareClick={() => handleClick(squareIndex)}/>
          ))}
        </div>
      </div>
  )
}