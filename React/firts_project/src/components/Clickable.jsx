
import React, { useState } from 'react'


const Clickable = () => {
    const [formState, setFormState] = useState({ name: "", lastName: "" })
    const handleTextChange = (e) => {
        const { name, value } = e.target
        setFormState({...formState,[name]:value})
        // setFormState((prevState) => ({
        //     ...prevState,
        //     [name]: value

        // }))
    }
    console.log(formState);
    return (
        <form>
            <label htmlFor="last name">last name</label>
            <input type="text" name='lastName' value={formState.lastName} onChange={handleTextChange} />
            <label htmlFor="name" >Name</label>
            <input type="text" name='name' value={formState.name} onChange={handleTextChange} />

        </form>
    )
}

export default Clickable