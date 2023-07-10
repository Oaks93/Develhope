// import Hello from "./components/Hello";
// import Message from "./components/Message";
//import Welcome from "./components/Welcome";
// import Welcomedefault from "./components/Welcomedefault";
// import WelcomeAge from "./components/WelcomAge";
// import WelcomewithJSX from "./components/WelcomewithJSX";
// import Age from "./components/Age";
//import WelcomeAdult from "./components/WelcomeAdult";
//import Welcome from "./components/Welcome";
//import WelcomePropsExisting from "./components/WelcomePropsExisting";
//  import WelcomeJohn from "./components/WelcomeJohn";
import React from "react";
import CounterProps from "./components/CounterProps";
function App() {
  return (
    <>
      <CounterProps initialValue={12} interval={1000} amount={1}/>
    </>

  );
}


export default App;
