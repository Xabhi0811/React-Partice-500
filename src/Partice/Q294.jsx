import { BrowserRouter, useSearchParams } from "react-router-dom";

const View = () => {
  const [params, setParams] = useSearchParams({ page: "1" });
  return (
    <button onClick={() => setParams({ page: "2" })}>
      Page {params.get("page")}
    </button>
  );
};
const Q294 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q294;
