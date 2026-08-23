import { BrowserRouter, useSearchParams } from "react-router-dom";

const View = () => {
  const [params, setParams] = useSearchParams();
  return (
    <button onClick={() => setParams({ term: "react" })}>
      {params.get("term") || "Set query"}
    </button>
  );
};
const Q293 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q293;
