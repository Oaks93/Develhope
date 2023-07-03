import React from 'react';

const Age = (props) => {
  const ageStyle = {
    color: props.age >= 18 && props.age < 65 ? 'blue' : 'red',

  };

  return (

    <div>
      {props.age >= 18 && props.age < 65 ? (<span style={ageStyle}>Your age is: {props.age}</span>) : (<span style={ageStyle} >You are smaller than 18 or older than 65</span>)}
    </div>
  );
};

export default Age;
//if age is 18 or more you got "Your age is: {props.age}" in blue color, but if you are smaller you got "You are too young" in Red color. 