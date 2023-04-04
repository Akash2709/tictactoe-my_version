import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./winner";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  // eslint-disable-next-line no-unused-vars

  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition]) {
      return;
    }

    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? `X` : `O`;
        }

        return squareValue;
      });
    });

    setIsXNext((currentIsNext) => !currentIsNext);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
