import React from "react";
import "./GuessPeg.css";

const GuessPeg = props => (
  <div
    style={{
      backgroundColor: props.color,
      border: props.color ? `1px solid ${props.color}` : "1px dashed grey",
      cursor: props.currentGuess && "pointer"
    }}
    className="GuessPeg"
    onClick={props.handlePegColor}
  />
);

export default GuessPeg;
