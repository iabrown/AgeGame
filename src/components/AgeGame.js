import React from 'react';
import ResetButton from './ResetButton';

const AgeGame = (props) => {
  //Define the state of the difficulty
  const [difficulty, setDifficulty] = React.useState(localStorage.getItem('difficulty') || '');

  const difficultySelector = (event) => {
    console.log(event.target.id);
    setDifficulty(event.target.id);
    localStorage.setItem('difficulty', event.target.id);
  }

  //Define a randomly generated number
  var age = Math.floor(Math.random()*10+1);

  //Define the message state for the guessing game
  const [guessMessage, setGuessMessage] = React.useState('');

  const checkGuess = (event) => {
    //Check if the guess is correct
    console.log('Your guess is here.' + event);
    if(event < age){
      console.log('Your guess is too low. Try again...');
      event.preventDefault();
    }
    if(event>age){
      console.log('Your guess is high low. Try again...');
    }
    if(event == age){
      console.log('You guessed correct');
    }
  }

  //Function to handle the guess submission. Use logic to check if the guess is correct.
  const handleGuess = (event) => {
    checkGuess(event.target.guess.value);
    event.preventDefault();

  }

  //function to reset the level of difficulty
  const resetDifficulty = (event) => {
    setDifficulty('');
    localStorage.setItem('difficulty', '');
  }


return(
  <div>
    Hello from the AgeGame. <br/><br/>
    Welcome to the game {props.userName}<br/><br/>
    Select a difficulty: <br/><br/>
    <button id="Easy" onClick={difficultySelector}>Easy</button>
    <button id="Medium"  onClick={difficultySelector}>Medium</button>
    <button id="Hard" onClick={difficultySelector}>Hard</button>

    <br/><br/>

    Current difficulty selected: {difficulty}
    <br/>
    Random number generated to: {age}

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

    <ResetButton onReset={resetDifficulty}/>

  </div>
);

}

export default AgeGame;
