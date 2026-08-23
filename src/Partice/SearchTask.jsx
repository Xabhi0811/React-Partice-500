import { useEffect, useState } from "react";

const SearchTask = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => setResult(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <input
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <output>Result: {result || "-"}</output>
    </>
  );
};

export default SearchTask;
