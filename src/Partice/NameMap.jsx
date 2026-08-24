const NameMap = () => {
  const abhi = ["User", "User Three", "Apoorva", "User Two"];
  return (
    <div>
      <h1>Name list</h1>
      <ul>
        {abhi.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameMap;
