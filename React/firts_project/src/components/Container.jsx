import React from 'react'

export default function Container({title,children}) {
    console.log(children);
    return (
    <>
    <div>{title}</div>
    <div>{children[0]}</div>

    
    </>
  )
}
