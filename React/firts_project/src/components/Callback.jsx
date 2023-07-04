import React, { useState, useCallback, useRef, memo } from 'react'

export default function Callback() {
    const [count, setCount] = useState(0)
    const [url, setUrl] = useState("")
    const handdleCount = useCallback(() => setCount(count + 1), [count])
    const handdleForm = useCallback((value) => {
        let url = `https://myAwesomeSite/${value}}`;
        console.log("url:", url);
        setUrl(url);
    },[])
    return (
        <>
            <h1>{count}</h1>
            <Component handdleCount={handdleCount} />
            <Form handdleForm={handdleForm} />
        </>
    )
}

export const Component = memo(({ handdleCount }) => {
    console.log("component is rendering");
    return <button onClick={handdleCount}>Click!</button>
})

export const Form = memo(({ handdleForm }) => {
    const myRef = useRef(null)
    console.log("form component is rendering");
    return (
        <>
            <input ref={myRef} />
            <button onClick={() => handdleForm(myRef?.current.value)}>trigger</button>
        </>
    )
})
