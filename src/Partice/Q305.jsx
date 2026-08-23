import { memo } from "react";

const Child = memo(({ value }) => <p>{value}</p>);

const Q305 = () => <Child value="Memoized child" />;

export default Q305;
