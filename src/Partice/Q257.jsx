import { memo } from "react";

const Child = memo(({ name }) => <p>{name}</p>);

const Q257 = () => <Child name="Abhi" />;
export default Q257;
