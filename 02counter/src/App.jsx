import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
  console.log('rendering');
  // let counter = 15;
  const addValue = () =>{
    counter = counter + 1;
    setCounter(counter);
    counter++;
    setCounter(counter);
    counter++;
    setCounter(counter)
    // if(counter === 20){
    //   counter = 20;
    //   setCounter(counter);
    // }
    // else{
    //   counter = counter + 1;
    //   setCounter(counter);
    // }

    
    // console.log(Math.random())
  }
  const removeValue = () =>{
   if(counter === 0){
    setCounter(counter);
   }
   else{
    counter = counter -1;
    setCounter(counter);
   }
  }

  return (
    <>
      <h1>chai aur react {counter}</h1>
      <button
      onClick={addValue}>add</button>
      <br />
      <button
      onClick={removeValue}>remove</button>
    </>
  )
}

export default App
