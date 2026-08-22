
const NumberMap = () => {
    const num = [1,2,3,4,5];
  return (
    <div>
      <h2>NUmber in map</h2>

      <ul>
        {num.map((num)=>(
            <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  )
}

export default NumberMap
