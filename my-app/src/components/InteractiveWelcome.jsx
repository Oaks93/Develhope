import React, { useState } from 'react'
import Welcome from './Welcome'

export default function InteractiveWelcome() {
    const [naame, setNaame] = useState("")
    const [age, setAge] = useState("")

    return (
        <>
            <label htmlFor="name-input">Name</label>
            <input
                type='text'
                placeholder='Insert a name'
                value={naame}
                id='name-input'
                onChange={e => setNaame(e.target.value)}
            />
            <label htmlFor="age-input">Age</label>
            <input
                type='text'
                placeholder='Insert an age'
                value={age}
                id='age-input'
                onChange={e => setAge(e.target.value)} />
            
            {naame || age ? <Welcome age={age} name={naame} /> : null}

        </>
    )
}

// <label htmlFor="">Uncontrolled</label>
//         <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />