import React, { useEffect, useState } from 'react'

const useCharCount = (limit=50) => {
    const [message,setMessage]=useState("");
    const [remaining,setRemaining]=useState(limit);
    const [warning,setWarning]=useState(false);

    useEffect(()=>{
        setRemaining(limit-message.length);
        setWarning(limit-message.length <=10);

    },[message,limit]);

    const handleChange=(e)=>{
        const value=e.target.value;
        if(value.length<=limit){
            setMessage(value);
        }
    }
    return {message,remaining,warning,handleChange};
}

export default useCharCount