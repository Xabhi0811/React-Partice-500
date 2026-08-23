import { cloneElement } from "react";

const Wrapper = ({ children }) =>
  cloneElement(children, { className: "wrapped" });
const Q338 = () => (
  <Wrapper>
    <p>Child content</p>
  </Wrapper>
);

export default Q338;
