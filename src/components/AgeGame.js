import React from 'react';
import Difficulty from './Difficulty';
import ResetButton from './ResetButton';

const AgeGame = (props) => {

  //Define a randomly generated number
  var age = Math.floor(Math.random()*10+1);

  //Define the message state for the guessing game
  const [guessMessage, setGuessMessage] = React.useState('');


  //Function to handle the guess submission. Use logic to check if the guess is correct.
  const handleGuess = (event) => {
    let guessNum = event.target.guess.value;
    if(guessNum < age){
      console.log('too low');
      event.target.guess.value='';
    }
    if(guessNum > age){
      console.log('too high');
      event.target.guess.value='';
    }
    if(guessNum == age){
      console.log('you are right!');
      event.target.guess.value='';
    }
    event.preventDefault();

  }

  //function to reset the level of difficulty
  const resetDifficulty = (event) => {
    props.setDifficulty('');
  }


return(
  <div>
    Hello from the AgeGame. <br/><br/>
    Welcome to the game {props.userName}<br/><br/>
    <Difficulty onSelect={props.selectDifficulty}/>
    <br/><br/>

    Current difficulty selected: {props.difficulty}
    <br/>
    Random number generated to: {age}
    <br />

    <br/><br/>

    Guess my age to win the game. Good luck!
    <br/><br/>

    <form onSubmit={handleGuess}>
      <label>
        Guess my age:
        <input id="guess" type="text"></input>
      </label>
    </form>

    <br/><br/>
    <br/><br/>

    <ResetButton onReset={props.onReset}/>

  </div>
);

}

export default AgeGame;
