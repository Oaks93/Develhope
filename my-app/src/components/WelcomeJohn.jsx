import React from 'react';
import Age from './Age';

export default function WelcomeJohn({name, age}) {
  return (
    <>
      {name === "John" ? (
        <p>Welcome back, {name}
        <Age age={age} /> 
        </p> //added Age here to render age only if Jhon is verified
      ) : (
        <strong style={{ color: "red" }}>Not valid Name!</strong>
      )}
      
    </>
  );
}
