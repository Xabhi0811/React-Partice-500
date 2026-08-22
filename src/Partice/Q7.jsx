const Card = ({ children }) => {
  return <article>{children}</article>
}

const Question5 = () => {
  return (
    <section>
      <h2>5. Card With Children</h2>
      <Card>
        <h3>Card title</h3>
        <p>This content is provided through children.</p>
      </Card>
    </section>
  )
}

export default Question5
