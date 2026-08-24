import { useState } from "react";
export default function Q389() {
  const [form, setForm] = useState({
    first: "",
    last: ""
  });
  const update = (field, value) => setForm(current => ({
    ...current,
    [field]: value
  }));
  return <div><input value={form.first} onChange={event => update("first", event.target.value)} placeholder="First" /><input value={form.last} onChange={event => update("last", event.target.value)} placeholder="Last" /><output>{form.first} {form.last}</output></div>;
}
