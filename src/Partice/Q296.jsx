import { BrowserRouter, useSearchParams } from "react-router-dom";

const View = () => {
  const [params] = useSearchParams();
  return <p>Optional: {params.get("filter") || "all"}</p>;
};
const Q296 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q296;
