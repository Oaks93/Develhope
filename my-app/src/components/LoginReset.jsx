import React,{useState} from 'react'
const wrapOnChange = (fn)=> (e)=> fn(e.target.value)

export default function LoginReset() {
    
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const isDisabled= !userName || !password 

    const resetInput= ()=>{
        setPassword("");
        setUserName("");
    }
    return (
        <>
            <label htmlFor="user">User name:</label>
            <br />
            <input type="text" id='user' onChange={wrapOnChange(setUserName)}  value={userName}/>
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id='password' onChange={wrapOnChange(setPassword)} value={password}/>
            <br />
            <br />
            <button disabled={isDisabled} >Login</button>
            <button onClick={()=>resetInput()}>Reset!</button>
        </>
    )
}
