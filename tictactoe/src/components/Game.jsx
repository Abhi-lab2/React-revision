import React, { useState } from "react";
import { calculateWinner } from "../Helper";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const x0 = xIsNext ? "X" : "0";

  const handleClick = (i) => {
    const historyGame = history.slice(0, stepNumber + 1);
    const current = historyGame[stepNumber];
    const squares = [...current];
    // reutnn if won
    if (winner || squares[i]) return;
    squares[i] = x0;
    setHistory([...historyGame, squares]);
    setStepNumber(historyGame.length);
    setXIsNext(!xIsNext);
  };

  //   StepNumber n jumps
  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  //   for the moves HISTORY
  const renderMoves = () =>
    history.map((_step, move) => {
      const dest = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{dest}</button>
        </li>
      );
    });

  return (
    <div>
      <div>
        <h1>Tic - Tac - Toe</h1>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
          <h3>History</h3>
          {renderMoves()}
          <h3>{winner ? "Winner: " + winner : "Next Player " + x0}</h3>
        </div>
      </div>
    </div>
  );
};

export default Game;
