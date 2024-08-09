import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  function handleAdd(){
    // setCount(count + 1); //0+1
    // setCount(count + 1); //0+1
    // setCount(count + 1); //0+1

    // count is staying constant

    // pass anonymous function for this if u want +3 on each function call

    setCount(count => count + 1); //0+1
    setCount(count => count + 1); //1+1
    setCount(count => count + 1); //2+1

    //state value is going to be stay constant unless and until we are going to update it 
  }

  function handleSub(){
    setCount(count - 1);
  }

  function handleReset(){
    setCount(0);
  }

  return (
    <div>
     <p>{count}</p> 
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
