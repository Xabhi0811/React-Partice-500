const Feature = ({ title, text }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

const Question6 = () => {
  const features = [
    { title: "Fast", text: "Build interfaces quickly." },
    { title: "Reusable", text: "Share one component everywhere." },
  ]

  return (
    <section>
      <h2>6. Refactored Repeated JSX</h2>
      {features.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </section>
  )
}

export default Question6
