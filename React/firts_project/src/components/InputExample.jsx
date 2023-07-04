import React,{useState,useRef} from 'react'



export const InputExample = () => {
    const [userName, setUserName] = useState("")
    const myRef= useRef()

console.log( "state",  userName);
console.log("Ref" , myRef.current?.value);


  return (
    <div >

        <label htmlFor="">Uncontrolled</label>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />
        <label htmlFor="">Controlled</label>
        <input type="text" ref={myRef}  />
    </div>
  )

}
