import React from 'react'

export default function Mylist(props) {
  
    return (
    <div>
        <ul>
            {props.data.map((e,key)=>
            (<li key={key}>{e + key}</li>))}
        </ul>
    </div>
  )
}
