const Profile = ({ name, skills, available }) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>{available ? "Available for work" : "Currently unavailable"}</p>
      {available && (
        <ul>
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      )}
    </article>
  )
}

const Question7 = () => {
  const profile = {
    name: "Abhishek",
    skills: ["React", "JavaScript", "CSS"],
    available: true,
  }

  return (
    <section>
      <h2>7. Profile Component</h2>
      <Profile {...profile} />
    </section>
  )
}

export default Question7
