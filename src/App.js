import React from 'react';import './App.css';
import Username from './components/Username';
import ResetButton from './components/ResetButton';
import AgeGame from './components/AgeGame';


const App = () => {
  //Defining the state of the username
  const [userName, setUserName] = React.useState(localStorage.getItem('username') || '');

  const testProps = (event) => {
    //function to test out passing props
    console.log('props test successful');
  }

  const handleUserName = (event) => {
    //Update the username to be stored in local memory
    setUserName(event.target.value);
    localStorage.setItem('username', event.target.value);
  }

  const handleSubmit = (event) => {
    /*
      This function will be handling the form submission. This will grab the value from the form input field and update the username state and also the local storage for the username.
    */
    setUserName(event.target.username.value);
    localStorage.setItem('username', event.target.username.value);
    event.target.username.value.clear();
    event.preventDefault();
  }

  const resetUserName = (event) => {
    //function to reset the username to be blank
    setUserName('');
    localStorage.setItem('username', '');
  }



  return (
    <div className="App">

      <Username userName={userName}  onSubmit={handleSubmit}/>


      <br /><br /><br />


      <ResetButton userName={userName} onReset={resetUserName}/>

      <br /><br /><br />
      <br /><br /><br />
      Lets start making the logic for the guessing game now.
      <br /><br /><br />
      <AgeGame userName={userName} />

    </div>
  );
}

export default App;
