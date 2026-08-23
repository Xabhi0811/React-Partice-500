import { BrowserRouter, Routes, Route } from "react-router-dom";

const Q273 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<p>Router ready</p>} />
    </Routes>
  </BrowserRouter>
);
export default Q273;
