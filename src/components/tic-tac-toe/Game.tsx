import Board from "@/components/tic-tac-toe/Board";
import {create} from "zustand";
import {combine} from "zustand/middleware";

interface IGameStore {
  history: string[];
  currentMove: number;
  setHistory: (nextSquares: string[] | ((squares: string[]) => string[])) => void;
  setCurrentMove: (nextMove: number | ((move: number) => number)) => void;
}

const useGameStore = create<IGameStore>(
    combine({history: [Array(9).fill(null)], currentMove: 0}, set => {
      return {
        setHistory: (nextHistory) => {
          set(state => ({
            history: typeof nextHistory === 'function' ? nextHistory(state.history) : nextHistory,
          }))
        },
        setCurrentMove: (nextCurrentMove) => {
          set(state => ({
            currentMove: typeof nextCurrentMove === 'function' ? nextCurrentMove(state.currentMove) : nextCurrentMove,
          }))
        },
      }
    })
)

export default function Game() {
  const history = useGameStore(state => state.history);
  const setHistory = useGameStore(state => state.setHistory);
  const currentMove = useGameStore(state => state.currentMove);
  const setCurrentMove = useGameStore(state => state.setCurrentMove);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const gameStyle = {
    display: "flex",
    flexDirection: "row",
    fontFamily: "monospace, sans-serif"
  }

  function onHandlePlay(nextSquares) {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
      <div style={gameStyle}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={onHandlePlay}/>
        <div style={{marginLeft: '3rem'}}>
          <ol>
            {history.map((_, historyIndex) => {
              const description = historyIndex > 0 ? `Go to move #${historyIndex}` : 'Go to game start';
              return (
                  <li key={historyIndex}>
                    <button onClick={() => jumpTo(historyIndex)}>
                      {description}
                    </button>
                  </li>
              )
            })}
          </ol>
        </div>
      </div>
  )
}