import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './Components/Wrapper';
import Nav from './Components/Nav';
import Header from './Components/Header/Jumbotron';
import Images from './Components/Images/Image';
import GameData from './GameData.json';

class App extends Component {

  state = {
    GameData,
    score: 0,
    highScore: 0
  };
  
  // toggle clicked from false -> true
  // randomly re-sort array - shuffle function
  // check end/continue logic - increment score
    // if not - call end game function to reset state for gamedata and score
  beenClicked = (clickedId) => {
    console.log('id here!', clickedId);
    // if card is clicked update clicked state from false to true
    let correctGuess = false
    const newGameData = this.state.GameData.map(item => {
      const newItem = Object.assign({}, item); // { ...item }
      if (newItem.id === clickedId) {
        // checking to see if item.clicked is already true/false -> if false, we toggle correctGuess and set it to be true on item.clicked
        // if the item clicked state was false -> set correct guess to be true
        if (!newItem.clicked) {
          correctGuess = true;
          newItem.clicked = true;
        }
      }
      return newItem;
    });
    // decide if it's end of game/continuing
      // true -> continue
      // false -> end game
    if (correctGuess) {
      this.continueGame(newGameData);
    } else {
      console.log("already clicked");
      this.endGame(newGameData);
    }
  }

  // end game function
  // alert the user - like game over
  // reset their current score to 0 and gamedata to be reset/make all clicked properties to be false
  endGame = (gameData) => {
    alert("Woops you already clicked that character. Game Over");
    // let correctGuess = 
    let newScore = 0;
    const newShuffledGameData = gameData;
    this.shuffle(newShuffledGameData);
    this.setState({
      GameData: newShuffledGameData,
      score: newScore
    });
  }
  
  // continue game function
  // increment scores for score and high score?
  continueGame = (gameData) => {
    // increment score & check if new high score needs to change
    const { score, highScore } = this.state;
    // max new score and high score
    const newScore = score + 1;
    const newHighScore = Math.max(newScore, highScore);
    const newShuffledGameData = gameData;
    this.shuffle(newShuffledGameData);
    
    this.setState({
      GameData: newShuffledGameData, // should shuffle
      score: newScore,
      highScore: newHighScore
    });
  }
  
  // shuffle function - randomizing array elements
  // to be called in both end/continue functions
  shuffle = newShuffledGameData => {
    for (let i = newShuffledGameData.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newShuffledGameData[i], newShuffledGameData[j]] = [newShuffledGameData[j], newShuffledGameData[i]];
    }
  }


  render() {
    return (
      <Wrapper>
        <Nav 
          score={this.state.score} highScore={this.state.highScore}
        />
        <Header />
        <div className="gameArea">
        {this.state.GameData.map(card => (
          <Images 
            id={card.id}
            key={card.id}
            image={card.image}
            beenClicked={this.beenClicked}
          />
          ))}
        </div>
      </Wrapper>
    );
  }
}


export default App;
