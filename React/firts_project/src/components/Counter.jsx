import React,{useState} from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)
    return (
    <>
    <h2>Count: {counter}</h2>
    <button onClick={()=>setCounter(counter +1)}>+</button>
    <button onClick={()=>setCounter(counter -1)}>-</button>
    </>
  )
}
