import { BrowserRouter, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/done", { state: { from: "form" } })}>
      Pass state
    </button>
  );
};
const Q290 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q290;
