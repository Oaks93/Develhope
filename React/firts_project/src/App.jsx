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


function App() {

  return (
    <>

      <Router>
        <Routes>

          <Route path='/' element={
            <>
              <a href="/humans">Humans</a>
              <a href="/animals">Animals</a>
            </>
          }
         />

          
          <Route path='/humans' element={<div><img src={humans} alt="humans" /></div>}/>
          <Route path='/animals' element={
            <>
              <a href="/animal1">Animal 1</a>
              <a href="/animal2">Animal 2</a></>
          }
          />

        
          <Route path='/animal1' element={<div><img src={animal1} alt="dogs" /></div>}/>
          <Route path='/animal2' element={<div><img src={animal2} alt="dog" /></div>}/>
        </Routes>

      </Router>

    </>
  )
}

export default App
