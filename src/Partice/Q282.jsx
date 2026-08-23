import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const View = () => {
  const { userId, postId } = useParams();
  return (
    <p>
      {userId}: {postId}
    </p>
  );
};
const Q282 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/users/:userId/posts/:postId" element={<View />} />
    </Routes>
  </BrowserRouter>
);
export default Q282;
