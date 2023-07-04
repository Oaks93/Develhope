import React,{useState} from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)
  let counterStyles={
    color:counter> 5 ? "red" : "green"
  }
    return (
    <>
    <h2 style={counterStyles}>Count: {counter}</h2>
    <button onClick={()=>setCounter(counter +1)}>+</button>
    <button onClick={()=>setCounter(counter -1)}>-</button>
    </>
  )
}
