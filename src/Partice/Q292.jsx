import { BrowserRouter, useSearchParams } from "react-router-dom";

const View = () => {
  const [params] = useSearchParams();
  return <p>Query: {params.get("term") || "none"}</p>;
};
const Q292 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q292;
