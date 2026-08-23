import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Q302 = () => (
  <BrowserRouter>
    <Link to="/about">Correct path</Link>
    <Routes>
      <Route path="/about" element={<p>About</p>} />
    </Routes>
  </BrowserRouter>
);
export default Q302;
