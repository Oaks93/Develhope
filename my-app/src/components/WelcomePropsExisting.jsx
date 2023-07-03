import React from 'react';
import Age from './Age';

const WelcomePropsExisting = (props) => {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
      {props.age && <Age age={props.age} />}
    </div>
  );
};

export default WelcomePropsExisting;
