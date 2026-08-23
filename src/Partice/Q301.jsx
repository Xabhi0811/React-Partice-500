import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

const View = () => <p>{useParams().postId}</p>;
const Q301 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/users/:userId/posts/:postId" element={<View />} />
    </Routes>
  </BrowserRouter>
);
export default Q301;
