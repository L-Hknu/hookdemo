import React, { useEffect, useContext } from "react";
import { myContext } from "./reducer";

function Input ()  {
    const {state ,dispatch ,setState1,state1}=useContext(myContext)
    useEffect(() => {
        setState1({lp:2})
    },[])    
    return (
        <div>
            {state1.lp}
        </div>
    )
}
export default Input