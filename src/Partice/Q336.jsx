import { forwardRef } from "react";

const CustomInput = forwardRef(({ label }, ref) => (
  <label>
    {label}
    <input ref={ref} />
  </label>
));

const Q336 = () => <CustomInput label="Name" />;

export default Q336;
