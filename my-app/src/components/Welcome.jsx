import React from 'react';

export default function Welcome(props) {
  return (
    <p>Welcome, <span style={{fontWeight: "bold"}}> {props.name}</span>!</p>
  );
}
