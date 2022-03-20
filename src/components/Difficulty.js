import React from 'react';

const Difficulty = (props) => {

  return (
    <div>
    Select a difficulty: <br/><br/>
    <button id="Easy" onClick={props.onSelect}>Easy</button>
    <button id="Medium"  onClick={props.onSelect}>Medium</button>
    <button id="Hard" onClick={props.onSelect}>Hard</button>

    <br/><br/>

    </div>
  );

}

export default Difficulty;
