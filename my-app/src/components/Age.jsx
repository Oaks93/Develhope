import React from 'react';

const Age = ({ age }) => {
  const ageStyle = {
    color: age >= 18 && age <= 65 ? 'blue' : 'red',
  };

  return (
    <div>
      {age >= 18 && age < 65 ? (
        <span style={ageStyle}>Your age is: {age}</span>
      ) : (
        <span style={ageStyle}>You are smaller than 18 or older than 65</span>
      )}
    </div>
  );
};

export default Age;

//if age is 18 or more you got "Your age is: {age}" in blue color, but if you are smaller you got "You are too young" in Red color. 