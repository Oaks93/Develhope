import React from 'react';

export default function WelcomeAge(props) {
  return (
    <>
    <p>Welcome, <span style={{fontWeight: "bold"}}> {props.name}</span>!</p>
    <p>Your age is <span style={{fontWeight: "bold", color:"blue"}}>{props.age}</span></p>
    </>
  );
}