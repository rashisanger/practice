import React from 'react'
import Directory from './ques1/Directory'
import CharCounter from './ques2/CharCounter'
import TemperatureConverter from './ques3/TemperatureConverter'
import FocusTracker from './ques4/F1'

const App = () => {
  return (
    <div>
      <Directory/>
      <CharCounter/>
      <TemperatureConverter/>
      <FocusTracker/>
    </div>
  )
}

export default App