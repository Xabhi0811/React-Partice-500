import { BrowserRouter, useLocation } from "react-router-dom";

const View = () => <p>{useLocation().state?.from || "No route state"}</p>;
const Q291 = () => (
  <BrowserRouter>
    <View />
  </BrowserRouter>
);
export default Q291;
