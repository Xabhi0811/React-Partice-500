import { BrowserRouter, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>Back</button>;
};
const Q299 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q299;
