import React from "react";
import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore";
import ScoreButton from "../ScoreButton/ScoreButton";
import "./GuessRow.css";

const GuessRow = (props) => (
  <div className="GuessRow">
    <div
      className="rowNum"
      style={{ color: props.currentGuess ? "black" : "lightgrey" }}
    >
      {props.rowIdx + 1}
    </div>
    <GuessPegs
      colors={props.colors}
      code={props.guess.code}
      currentGuess={props.currentGuess}
      handlePegColor={props.handlePegColor}
    />
    {props.currentGuess ? (
      <ScoreButton guess={props.guess} handleGuess={props.handleGuess} />
    ) : (
      <GuessScore score={props.guess.score} colors={props.colors} />
    )}
  </div>
);

export default GuessRow;
