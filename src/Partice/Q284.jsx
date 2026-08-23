import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Layout = () => (
  <section>
    <p>Layout</p>
    <Outlet />
  </section>
);
const Q284 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default Q284;
