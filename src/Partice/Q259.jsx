import { memo } from "react";

const Child = memo(({ value }) => <p>{value}</p>);
const Q259 = () => <Child value="Shallow values compare by reference" />;
export default Q259;
