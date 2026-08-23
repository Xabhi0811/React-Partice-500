import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const User = () => <p>User profile</p>;
const Q280 = () => (
  <BrowserRouter>
    <Link to="/users/1">User</Link>
    <Routes>
      <Route path="/users/:id" element={<User />} />
    </Routes>
  </BrowserRouter>
);
export default Q280;
