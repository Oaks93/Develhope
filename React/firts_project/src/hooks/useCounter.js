import React, { useState } from 'react'

export const  useCounter = (inValue = 0)=> {

  const [count, setCount] = useState(inValue)

  
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const divide= (division) => {
    setCount((prevCount) => (prevCount / division))
  }

  return [count, increment, decrement, divide]
}
