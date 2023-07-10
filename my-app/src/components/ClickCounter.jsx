import React, {useState} from 'react'


export default function ClickCounter() {
 const [count, setCount] = useState(0)
  return (

    <>
    <button onClick={() => setCount(count +1)}>+1</button>
    <p>Count = {count}</p>
    </>
  )
}
