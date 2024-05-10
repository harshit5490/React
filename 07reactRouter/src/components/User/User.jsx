import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id} = useParams()
    return(
        <div className="w-full bg-black text-white text-center">
            user : {id}
        </div>
    )
}
export default User