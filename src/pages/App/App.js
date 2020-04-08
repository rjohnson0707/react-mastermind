import React, { Component } from "react";
import "./App.css";
import GamePage from "../GamePage/GamePage";
import { Route, Switch } from "react-router-dom";
import SettingsPage from "../SettingsPage/SettingsPage";

const colors = {
  Easy: ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD"],
  Moderate: ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD", "#C345ED"],
  Difficult: ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD", "#C345ED", "#4D5643"],
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      secretCode: this.genCode(4),
      difficulty: colors.Easy,
      elapsedTime: 0,
    };

    console.log("App: constructor");
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0,
      },
    };
  }

  handleNewGame = () => {
    this.setState({
      code: this.genCode(),
      guesses: [this.getNewGuess()],
      selColorIdx: 0,
      elapsedTime: 0,
    });
  };

  handleDifficult = () => {
    this.setState({
      difficulty: colors.Difficult,
      secretCode: this.genCode(6),
      code: [null, null, null, null, null, null],
      guesses: [this.getNewGuess()],
    });
  };

  handleModerate = () => {
    this.setState({
      difficulty: colors.Moderate,
      secretCode: this.genCode(5),
      guesses: [this.getNewGuess()],
    });
  };

  handleEasy = () => {
    this.setState({
      difficulty: colors.Easy,
      secretCode: this.genCode(4),
      guesses: [this.getNewGuess()],
    });
  };

  genCode = (num) => {
    return new Array(num)
      .fill()
      .map((dummy) => Math.floor(Math.random() * num));
  };

  getWinTries() {
    let lastGuess = this.state.guesses.length - 1;
    let num = this.state.difficulty.length;
    return this.state.guesses[lastGuess].score.perfect === num
      ? lastGuess + 1
      : 0;
  }

  handleColorSelection = (colorIdx) => {
    this.setState({ selColorIdx: colorIdx });
  };

  handlePegColor = (pegIdx) => {
    let newGuesses = this.state.guesses.length - 1;

    let guessesCopy = [...this.state.guesses];
    guessesCopy[newGuesses].code[pegIdx] = this.state.selColorIdx;
    this.setState({ guess: guessesCopy });
  };

  // handleGuess = guessIdx => {
  //   let codeAttempt = this.state.code;
  //   let guessAttempt = this.state.guesses[0].code;
  //   if (guessAttempt.toString() === codeAttempt.toString()) {
  //     alert("You have Won!");
  //   } else {
  //     let guessing = this.state.guesses[1];
  //     let guessed = this.state.guesses[0];
  //     this.setState({ guessing, guessed });

  //     // this.state.guesses[1] = this.state.guesses[0].code;
  //     // this.getNewGuess();
  //   }
  // };

  handleScoreClick = () => {
    let currentGuessIndex = this.state.guesses.length - 1;
    let guessCodeCopy = [...this.state.guesses[currentGuessIndex].code];
    let secretCodeCopy = [...this.state.secretCode];

    let perfect = 0,
      almost = 0;
    guessCodeCopy.forEach((code, idx) => {
      if (secretCodeCopy[idx] === code) {
        perfect++;
        guessCodeCopy[idx] = secretCodeCopy[idx] = null;
      }
    });

    guessCodeCopy.forEach((code, idx) => {
      if (code === null) return;
      let foundIdx = secretCodeCopy.indexOf(code);
      if (foundIdx > -1) {
        almost++;
        secretCodeCopy[foundIdx] = null;
      }
    });

    let guessesCopy = [...this.state.guesses];
    let guessCopy = { ...guessesCopy[currentGuessIndex] };
    let scoreCopy = { ...guessCopy.score };
    let num = this.state.difficulty.length;

    scoreCopy.perfect = perfect;
    scoreCopy.almost = almost;

    guessCopy.score = scoreCopy;

    guessesCopy[currentGuessIndex] = guessCopy;

    if (perfect !== num) guessesCopy.push(this.getNewGuess());

    this.setState({ guesses: guessesCopy });
  };

  componentDidMount() {
    console.log("App: componentDidMount");
  }

  componentDidUpdate() {
    console.log("App: componentDidUpdate");
  }

  handleTimerUpdate = () => {
    this.setState((state) => ({ elapsedTime: ++state.elapsedTime }));
  };

  render() {
    let winTries = this.getWinTries();
    console.log("App: render");
    return (
      <div className="App">
        <header className="header-footer">React Mastermind</header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <GamePage
                winTries={winTries}
                colors={this.state.difficulty}
                selColorIdx={this.state.selColorIdx}
                guesses={this.state.guesses}
                elapsedTime={this.state.elapsedTime}
                handleColorSelection={this.handleColorSelection}
                handleScoreClick={this.handleScoreClick}
                handleNewGame={this.handleNewGame}
                handlePegColor={this.handlePegColor}
                handleTimerUpdate={this.handleTimerUpdate}
              />
            )}
          />
          <Route
            path="/settings"
            render={(props) => (
              <SettingsPage
                {...props}
                colors={colors}
                difficulty={this.state.difficulty}
                handleDifficult={this.handleDifficult}
                handleEasy={this.handleEasy}
                handleModerate={this.handleModerate}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
