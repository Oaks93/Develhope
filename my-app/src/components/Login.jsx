import React,{useState} from 'react'
const wrapOnChange = (fn)=> (e)=> fn(e.target.value)
export default function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const isDisabled= !userName || !password 
    return (
        <>
            <label htmlFor="user">User name:</label>
            <br />
            <input type="text" id='user' onChange={wrapOnChange(setUserName)} />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id='password' onChange={wrapOnChange(setPassword)} />
            <br />
            <br />
            <button disabled={isDisabled} >Login</button>
        </>
    )
}
