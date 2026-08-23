import { BrowserRouter, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/contact")}>Navigate</button>;
};
const Q288 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q288;
