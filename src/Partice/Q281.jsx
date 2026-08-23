import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const View = () => <p>User id: {useParams().id}</p>;
const Q281 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/users/:id" element={<View />} />
    </Routes>
  </BrowserRouter>
);
export default Q281;
