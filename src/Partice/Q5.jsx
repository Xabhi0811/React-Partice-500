const Title = ({ children }) => <h3>{children}</h3>
const Description = ({ children }) => <p>{children}</p>
const Action = ({ children }) => <button type="button">{children}</button>

const Question3 = () => {
  return (
    <section>
      <h2>3. Composed Components</h2>
      <Title>Reusable title</Title>
      <Description>Reusable description</Description>
      <Action>Continue</Action>
    </section>
  )
}

export default Question3
