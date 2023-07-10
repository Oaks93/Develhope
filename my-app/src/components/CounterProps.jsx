import CounterDisplay from './CounterDisplay'
import React, { useState, useEffect } from 'react' 


export default function Counter(props) {
    const [count, setCount] = useState(props.initialValue)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount +props.amount)
        }, props.interval)
        return ()=> clearInterval(interval)
        },[])
    


    return (
         <CounterDisplay display={count}/>
    )
}