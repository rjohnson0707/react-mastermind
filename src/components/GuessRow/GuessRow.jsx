import React from "react";
import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore";

const GuessRow = props => (
  <div>
    <div>{props.rowIdx + 1}</div>
    <GuessPegs colors={props.colors} code={props.guess.code} />
    <GuessScore />
  </div>
);
export default GuessRow;
