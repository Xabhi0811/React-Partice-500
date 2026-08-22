import React from 'react'


const User = ({user: {name, age, address: {city}}}) =>{
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>City: {city}</h2>
        </div>
    );
};

const NestedLopp = () => {
    const userData ={
        name: "abhishek",
        age: 18,
        address: {
            city: "Bhopal",
        },
    };
  return (
    <div>
      <User user={userData}/>
    </div>
  )
}

export default NestedLopp
