import { BrowserRouter, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const save = () => navigate("/success");
  return <button onClick={save}>Save</button>;
};
const Q289 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q289;
