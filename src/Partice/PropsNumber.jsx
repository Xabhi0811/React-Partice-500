import React from 'react'

const PropsNumber = () => {

    const num = (props) =>{
        return <h2>Age is {props.age}</h2>
    }
  return (
    <div>
        <num age="18"/>
        <num age="17"/>

      
    </div>
  )
}

export default PropsNumber
