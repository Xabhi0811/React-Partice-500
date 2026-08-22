import React from 'react'

const Props = () => {
     const greeting = (props)=>{
        <h1>name is {props.name}!</h1>
     }
  return (
    <div>
      <greeting name="Ahishek"/>
      <greeting name="bittu"/>

    </div>
  )
}

export default Props
