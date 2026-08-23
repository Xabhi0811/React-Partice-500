import { BrowserRouter, useSearchParams } from "react-router-dom";

const View = () => {
  const [params, setParams] = useSearchParams({ term: "react" });
  return (
    <button
      onClick={() => {
        params.delete("term");
        setParams(params);
      }}
    >
      Delete query
    </button>
  );
};
const Q295 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q295;
