import React from "react";
import GuessPeg from "../GuessPeg/GuessPeg";
import "./GuessPegs.css";

const GuessPegs = (props) => (
  <div className="GuessPegs">
    <GuessPeg
      idx={1}
      color={props.colors[props.code[0]]}
      currentGuess={props.currentGuess}
      handlePegColor={() => props.handlePegColor(0)}
    />
    <GuessPeg
      idx={2}
      color={props.colors[props.code[1]]}
      currentGuess={props.currentGuess}
      handlePegColor={() => props.handlePegColor(1)}
    />
    <GuessPeg
      idx={3}
      color={props.colors[props.code[2]]}
      currentGuess={props.currentGuess}
      handlePegColor={() => props.handlePegColor(2)}
    />
    <GuessPeg
      idx={4}
      color={props.colors[props.code[3]]}
      currentGuess={props.currentGuess}
      handlePegColor={() => props.handlePegColor(3)}
    />
    {props.colors.length > 4 ? (
      <GuessPeg
        idx={5}
        color={props.colors[props.code[4]]}
        currentGuess={props.currentGuess}
        handlePegColor={() => props.handlePegColor(4)}
      />
    ) : (
      ""
    )}
    {props.colors.length > 5 ? (
      <GuessPeg
        idx={6}
        color={props.colors[props.code[5]]}
        currentGuess={props.currentGuess}
        handlePegColor={() => props.handlePegColor(5)}
      />
    ) : (
      ""
    )}
  </div>
);

export default GuessPegs;
