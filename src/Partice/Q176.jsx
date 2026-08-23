import { createContext } from "react";

const ValueContext = createContext("default");
const Q176 = () => <p>{ValueContext ? "Context created" : ""}</p>;
export default Q176;
