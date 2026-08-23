import { BrowserRouter, Routes, Route } from "react-router-dom";

const Q283 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<p>Dashboard</p>}>
        <Route path="settings" element={<p>Settings</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default Q283;
