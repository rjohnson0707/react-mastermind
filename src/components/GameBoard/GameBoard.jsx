import React from "react";
import GuessRow from "../GuessRow/GuessRow";

const GameBoard = (props) => (
  <div className="GameBoard">
    {props.guesses.map((guess, idx) => (
      <GuessRow
        guess={guess}
        colors={props.colors}
        key={idx}
        rowIdx={idx}
        currentGuess={idx === props.guesses.length - 1}
        handlePegColor={props.handlePegColor}
        handleGuess={props.handleGuess}
      />
    ))}
  </div>
);
export default GameBoard;
