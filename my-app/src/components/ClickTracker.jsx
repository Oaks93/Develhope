import React,{useState} from 'react'

export default function ClickTracker() {
    const [pressedbutton, setPressedbutton] = useState("No buttons pressed")
    const handlePressed= (event) =>{
        const buttonName= event.target.name
        setPressedbutton(buttonName)
    }
    

  return (
    <>
    <button name="button 1" onClick={handlePressed}>1</button>
    <button name="button 2" onClick={handlePressed}>2</button>
    <button name="button 3" onClick={handlePressed}>3</button>
    <p>Button pressed: <strong>{pressedbutton}</strong></p>
    </>
  )
}
