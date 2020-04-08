import React from "react";
import "./GuessScore.css";

const GuessScore = ({ score }, colors) => {
  let scores = (
    "P".repeat(score.perfect) +
    "A".repeat(score.almost) +
    "I".repeat(colors.length - score.perfect - score.almost)
  ).split("");

  let baseStyle = {
    width: 10,
    height: 10,
    margin: 1,
    border: "2px solid",
    borderRadius: "50%",
  };

  let pegStyles = {
    P: {
      borderColor: "black",
      backgroundColor: "black",
    },
    A: {
      borderColor: "black",
      backgroundColor: "white",
    },
    I: {
      borderColor: "white",
      backgroundColor: "lightgrey",
    },
  };

  return (
    <div className="GuessScore">
      {scores.map((score, idx) => (
        <div key={idx} style={{ ...baseStyle, ...pegStyles[score] }} />
      ))}
    </div>
  );
};

export default GuessScore;
