import React from 'react'
import useCharCount from './useCharCount'

const CharCounter = () => {
   const { message, remaining, warning, handleChange }=useCharCount(50);
  return (
    <div>
        <textarea
            value={message}
            onChange={handleChange}
            placeholder='Type Your message'
            rows={4}
        ></textarea>
        <div>
            <h2>Total characters Typed:{message.length}</h2>
            <h3>Remaining:{remaining}</h3>
            {warning && <p style={{color:"red"}}>You are running Out of space.Only {remaining} character left</p>}
        </div>
    </div>
  )
}

export default CharCounter