import React, { useEffect, useState } from 'react'

const Test2 = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const value = async ()=>{
            const response = await fetch("./volume.json");
            const abhi = await response.json();
            setData(abhi);
        }
        value();

    },[])

    const top = data.filter((item)=>item.unit==="BTC").sort((a,b)=>b.volume-a.volume).slice(0,5);
  return (
    <div>
        <h2>total 5 vlaue of Btc</h2>
       <ul>{top.map((person)=>(
        <li key={person.name}>{person.name}-{person.volume}BTC</li>
       ))}</ul>
    </div>
  )
}

export default Test2
