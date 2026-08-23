import { BrowserRouter, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(1)}>Forward</button>;
};
const Q300 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q300;
