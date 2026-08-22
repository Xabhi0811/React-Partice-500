import React from 'react'

const NameMap = () => {
    const abhi = ["Abhishek" , "Rashi", "Apoorva" , "Bittu"]
  return (
    <div>
        <h1>Name list</h1>
        <ul>
            {abhi.map((name, index)=>(
                <li key={index}>{name}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default NameMap
