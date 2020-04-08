import React from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import GameTimer from "../../components/GameTimer/GameTimer";
import NewGameButton from "../../components/NewGameButton/NewGameButton";
import "./GamePage.css";
import { Link } from "react-router-dom";

function GamePage(props) {
  return (
    <div className="GamePage">
      <div className="flex-h align-flex-end">
        <GameBoard
          colors={props.colors}
          guesses={props.guesses}
          handlePegColor={props.handlePegColor}
          handleGuess={props.handleScoreClick}
        />
        <div className="GamePage-controls">
          <ColorPicker
            colors={props.colors}
            selColorIdx={props.selColorIdx}
            handleColorSelection={props.handleColorSelection}
          />
          <GameTimer
            elapsedTime={props.elapsedTime}
            handleTimerUpdate={props.handleTimerUpdate}
          />
          <Link className="btn btn-default GamePage-link-margin" to="/settings">
            Difficulty
          </Link>
          <NewGameButton newGame={props.handleNewGame} />
        </div>
      </div>
      <footer className="header-footer">
        {props.winTries
          ? `You won in ${props.winTries} Guesses!`
          : "Good Luck!"}
      </footer>
    </div>
  );
}

export default GamePage;
