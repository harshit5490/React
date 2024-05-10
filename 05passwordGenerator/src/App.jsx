import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [characterAllowed,setcharacterAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++){
      let pos = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(pos);
     
    }
    setPassword(pass);

  },[length,numberAllowed,characterAllowed,setPassword])

  const copyToclipboard = useCallback(() =>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect( () => {
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          placeholder='Password'
          className='outline-none w-full px-1 py-3'
          readOnly
          ref = {passRef} />

          <button
          onClick={copyToclipboard}
          className='outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0'
          > Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className= 'cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}} />
              <label > length : {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"  
              id="numberInput"
              defaultChecked = {numberAllowed}
              onChange={()=>{
                setnumberAllowed((prev) => !prev);
              }} />
              <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"  
              id="characterInput"
              defaultChecked = {characterAllowed}
              onChange={()=>{
                setcharacterAllowed((prev) => !prev);
              }} />
              <label htmlFor="charaterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
