import { useState } from 'react'

const StateFromProps = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue)

  return <button onClick={() => setValue((current) => current + 1)}>Value: {value}</button>
}

const StateFromPropsExample = () => <StateFromProps initialValue={10} />

export default StateFromPropsExample
