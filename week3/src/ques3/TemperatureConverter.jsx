import React from 'react'
import useTemperature from './useTemperature'

const TemperatureConverter = () => {
    const { celsius, fahrenheit, handelCelcius, handelFahrenheit }=useTemperature();
  return (
    <div>
        <h1>Temperature Converter</h1>
        <input value={celsius}
        onChange={handelCelcius}
        type="text"
        placeholder='Enter celsius value'/>
        <input value={fahrenheit}
        onChange={handelFahrenheit}
        type="text" placeholder='Enter fahrenheit value'/>
    </div>
  )
}

export default TemperatureConverter