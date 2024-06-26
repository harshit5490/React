import React ,{useContext, useState} from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username,Setusername] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(UserContext); 
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <>
            <h2>Login</h2>
            <input type="text" placeholder="Username"
            value={username}
            onChange={(e)=>{Setusername(e.target.value)}} />
            {" "}
            <input type="text" placeholder="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Login
