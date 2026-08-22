const Calculator = ({ price, quantity }) => {
    const total = price * quantity;
    return (
        <div>
            <h2>Price: {price}</h2>
            <h2> Quantity: {quantity}</h2>
            <h2>Total: {total}</h2>
        </div>
    )
}

const Value = () => {
  return (
    <div>
      <Calculator price={100} quantity={5}/>
    </div>
  )
}

export default Value
