/**
 * Create a unordered list using React that lists the top 5 exchanges by volume of currency type Bitcoin (BTC) in
 * descending order given the api endpoint:
 *   /volume.json
 *
 * Work the way you are most comfortable and treat this as an everyday task. You are allowed to ask questions,
 * look up documentation and search for answers.
 */

import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState([]);

  useEffect(()=>{
    const fectchdata = async () =>{
      const data = await fetch("./people.json");

      const response = await data.json();

      setValue(response);

    }
    fectchdata();
  },[]);

  const top = value.filter((iteam)=>iteam.unit === "BTC").sort((a,b)=>b.volume-a.volume).slice(0,5);
  return (
    <div className="App">
      <h1>Top 5 Exchanges by BTC Volume</h1>
        <ul>
        {top.map((person)=>(
           <li key={person.name}>
            {person.name}-{person.volume} BTC
           </li>
        ))}
          
        </ul>
    </div>
  );
};

export default App;
