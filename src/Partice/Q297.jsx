import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Protected = ({ allowed }) =>
  allowed ? <p>Private page</p> : <Navigate to="/login" />;
const Q297 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/private" element={<Protected allowed={false} />} />
      <Route path="/login" element={<p>Login</p>} />
    </Routes>
  </BrowserRouter>
);
export default Q297;
