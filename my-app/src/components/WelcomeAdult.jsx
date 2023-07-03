import React from 'react';
import Age from './Age';

const WelcomeAdult = (props) => {
  return (
    <div>
      <p>Welcome, <span style={{fontWeight: "bold"}}>{props.name}</span>!</p>
      <Age age={props.age}/>
    </div>
  );
};

export default WelcomeAdult;
