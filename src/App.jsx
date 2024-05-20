import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [state,setState]= useState(0);

  // let count=0;
  let clickPlus = () =>{
    // count++;
    setState(state+1);
  };
  let clickMinus = () => {
    setState(state-1);
  }

  let clickDefault = () => {
    setState(state-state);
  }

  return (
    <>
      <h1>Counter</h1>
      <br></br>
      <h1 id="state"> {state} </h1>
      <br></br>
      <div className="style">
      <button onClick={clickPlus}> + </button>
      <button onClick={clickDefault}> 0 </button>
      <button onClick={clickMinus}> - </button>
      
      </div>
    </>
    )
}

export default App
