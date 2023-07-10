import React, { useState } from 'react'

export default function TodoList() {
    const [inputValue, setInputValue] = useState("")
    const [items, setItems] = useState([])

    const handleTodo = () => {
        setItems(prevItems => [...prevItems, inputValue]);
        setInputValue('');
    }
    const handleDeleteTodo = index => {
        setItems(prevItems => prevItems.filter((_, i) => i !== index));
      };
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={handleTodo}>Add Todo</button>
            <br />
            <br />
            <label htmlFor="to-do">Todo List:</label>
            <ul id="to-do">
                {items.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" />
                        {item}
                        
                        <button onClick={()=>handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}