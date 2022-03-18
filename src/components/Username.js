import React from 'react';

const Username = (props) => {




  return (
    <div className="">
      <form onSubmit={props.onSubmit}>
        <label>
          Enter a username: <input id='username' type='text'  />
        </label>
      </form>

        <br /><br /><br />

      Your username is: {props.userName}

    </div>
  );
}

export default Username;
