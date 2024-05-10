import { useState } from 'react'


function App() {
  const [color, setColor] = useState("grey")

  return (
    
      <div className='w-full h-screen '
      style={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button
            onClick={() => setColor("red")}
            // onClick={setColor()} this is wrong because function return something which is not expect by onclik
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}>Red</button>
            <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "green"}}>Green</button>
            <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "blue"}}>blue</button>
            <button
            onClick={() => setColor("olive")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "olive"}}>olive</button>

          </div>
        </div>
      </div>
    
  )
}

export default App
