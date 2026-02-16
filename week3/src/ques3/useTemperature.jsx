import React, { useEffect, useState } from 'react'

const useTemperature = () => {
    const [celsius,setCelsius]=useState("")
    const [fahrenheit,setFahrenheit]=useState("")

    useEffect(()=>{
        if(celsius==="" || isNaN(celsius)){
            setFahrenheit("");
            return;
        }
        const f = (parseFloat(celsius) * 9) / 5 + 32;
        setFahrenheit(f.toFixed(2));
    },[celsius]);

    useEffect(()=>{
        if(fahrenheit==="" || isNaN(fahrenheit)){
            setCelsius("");
            return;
        }
        const c = ((parseFloat(fahrenheit) - 32) * 5) / 9;
        setCelsius(c.toFixed(2));
    },[fahrenheit]);
    const handelCelcius=(e)=>{
        setCelsius(e.target.value);
    }
    const handelFahrenheit=(e)=>{
        setFahrenheit(e.target.value);
    }

    return {celsius,fahrenheit,handelCelcius,handelFahrenheit}
}

export default useTemperature