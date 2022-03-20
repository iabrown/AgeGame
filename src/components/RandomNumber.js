import React from 'react';

const RandomNumber = (event) => {
  //Define a randomly generated number
  let age = Math.floor(Math.random()*10+1);


  return (
    <div>
    Random number generated to: {age}
    </div>
  );

}

export default RandomNumber;
