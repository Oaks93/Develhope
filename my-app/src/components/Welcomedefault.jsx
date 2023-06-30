import React from 'react';

export default function Welcomedefault(props) {
  const { name } = props;
  
  return (
    <p>Welcome, <span style={{fontWeight: "bold"}}>{name}</span>!</p>
  );
}

Welcomedefault.defaultProps = {
  name: 'Guest',
};
