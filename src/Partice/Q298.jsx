import { BrowserRouter, Navigate } from "react-router-dom";

const Q298 = ({ allowed }) => (
  <BrowserRouter>
    {allowed ? <p>Allowed</p> : <Navigate to="/login" />}
  </BrowserRouter>
);
export default Q298;
