import React from 'react';import './App.css';
import Username from './components/Username';
import RandomNumber from './components/RandomNumber';
import ResetButton from './components/ResetButton';
import AgeGame from './components/AgeGame';


const App = () => {
  //Defining the state of the username
  const [userName, setUserName] = React.useState(localStorage.getItem('username') || '');
  //Define the state of the difficulty
  const [difficulty, setDifficulty] = React.useState(localStorage.getItem('difficulty') || '');




  const handleUserName = (event) => {
    //Update the username to be stored in local memory
    setUserName(event.target.value);
    localStorage.setItem('username', event.target.value);
  }

  const difficultySelector = (event) => {
    //Function to update the difficulty state
    setDifficulty(event.target.id);
    localStorage.setItem('difficulty', event.target.id);
    event.preventDefault();
  }


  const handleSubmit = (event) => {
    /*
      This function will be handling the form submission. This will grab the value from the form input field and update the username state and also the local storage for the username.
    */
    setUserName(event.target.username.value);
    localStorage.setItem('username', event.target.username.value);
    event.target.username.value='';
    event.preventDefault();
  }

  const resetUserName = (event) => {
    //function to reset the username to be blank
    setUserName('');
    localStorage.setItem('username', '');
  }

  const resetDifficulty = (event) => {
    setDifficulty('');
    localStorage.setItem('difficulty', '');
  }

  const testProps = (event) => {
    //function to test out passing props
    console.log('props test successful');
  }


  return (
    <div className="App">
    <br /><br /><br />


      <Username userName={userName}  onSubmit={handleSubmit} onReset={resetUserName}/>


      <br /><br /><br />
      <RandomNumber />
      <br /><br /><br />
      <strong>Lets start making the logic for the guessing game now.</strong>
      <br /><br /><br />
      <AgeGame userName={userName} selectDifficulty={difficultySelector} difficulty={difficulty} onReset={resetDifficulty}/>

    </div>
  );
}

export default App;
