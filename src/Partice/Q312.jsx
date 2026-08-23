import { memo } from "react";

const Child = memo(({ user }) => <p>{user.name}</p>);

const Q312 = () => <Child user={{ name: "Abhi" }} />;

export default Q312;
