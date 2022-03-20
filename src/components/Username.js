import React from 'react';
import RandomNumber from './RandomNumber';
import ResetButton from './ResetButton';

const Username = (props) => {

  const testProps=(event) => {
    console.log('test props ok');
  }



  return (
    <div className="">
      <form onSubmit={props.onSubmit}>
        <label>
          Enter a username: <input id='username' type='text'  />
        </label>
      </form>

        <br /><br /><br />

      Your username is: {props.userName}

      <br /><br /><br />
      <ResetButton onReset={props.onReset}/>


    </div>
  );
}

export default Username;
