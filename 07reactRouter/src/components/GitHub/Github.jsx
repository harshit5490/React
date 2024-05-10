import React, { useState } from "react";
import { useEffect} from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/harshit5490')
    //     .then((res) => res.json())
    //     .then((data) => {setData(data)})
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default GitHub

export const GithubInfo = async () =>{
    const res = await fetch('https://api.github.com/users/harshit5490')
    return res.json()
}