import React from 'react';
import Age from './Age';

export default function Welcome(props) {
  return (
    <>
    <p>Welcome, <span style={{fontWeight: "bold"}}> {props.name}</span>!</p>
    <Age age={props.age}/>
    </>
  );
}
