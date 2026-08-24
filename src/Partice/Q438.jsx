import { useState } from "react";
export default function Q438() {
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);
  return <div><button onClick={() => setSort(sort === "name" ? "date" : "name")}>Sort by {sort}</button><button onClick={() => setPage(value => value + 1)}>Page {page}</button><output>Fetched table page</output></div>;
}
