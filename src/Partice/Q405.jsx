import { useState } from "react";
export default function Q405() {
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null
  });
  const run = () => {
    setState({
      status: "pending",
      data: null,
      error: null
    });
    setTimeout(() => setState({
      status: "success",
      data: "Done",
      error: null
    }), 400);
  };
  return <div><button onClick={run}>Run async</button><output>{state.status} {state.data}</output></div>;
}
