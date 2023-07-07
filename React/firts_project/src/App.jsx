// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Name from './components/Name'
// import { InputExample } from './components/InputExample'
// import Counter from './components/Counter'
// import Counterclass from './components/Counterclass'
// import Clickable from './components/Clickable'
//import Mylist from './components/Mylist'
// import Display from './components/Display'
// import Container from './components/Container'
// import { UserContext, UserProvider } from './context/userProvider'
// import Toggle from './components/Toggle'
// //import { useCounter } from './hooks/useCounter'

//import Callback from "./components/Callback";
import React from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import humans from "./assets/humans.jpg"
import animal1 from "./assets/animal1.jpg"
import animal2 from "./assets/animal2.jpg"
import Memo from './components/memo'

function App() {

  return (
    <>

      <Memo/>
      
    </>
  )
}

export default App
// React.memo = renderIfPropsHaveChanged
// it wraps an entire component
// and check it's props that it receives from it's parent. If the props stay the same across multiple re-renders. This component will not be re-rendered unnecessarily, since it's wrapped by memo