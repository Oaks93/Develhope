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
        <h1>Count: {count}</h1>
    )
}