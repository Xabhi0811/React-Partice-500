import { useState } from 'react'

const Even = () => {
    const [number , setNumber] = useState("");
  return (
    <div>
        <input type='number' value={number} placeholder="enter any number"onChange={(e)=>setNumber(e.target.value)}/>

      {number !==""&&(
        number%2===0?(
          <h1>Number is even {number}</h1>
        ):(
           <h2> Number is odd {number}</h2>
        )
      )}
      
    </div>
  )
}

export default Even
