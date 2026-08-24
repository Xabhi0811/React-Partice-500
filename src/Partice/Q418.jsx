import { useCallback, useState } from "react";
export default function Q418() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");
  const submit = useCallback(event => {
    event.preventDefault();
    setSubmitted(value);
  }, [value]);
  return <form onSubmit={submit}><input value={value} onChange={event => setValue(event.target.value)} /><button>Submit</button><output>{submitted}</output></form>;
}
