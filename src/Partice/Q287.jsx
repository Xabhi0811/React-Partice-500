import { BrowserRouter, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>Go about</button>;
};
const Q287 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q287;
