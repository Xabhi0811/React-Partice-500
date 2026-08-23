import { forwardRef } from "react";

const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);

const Q331 = () => <Input placeholder="Forwarded input" />;

export default Q331;
