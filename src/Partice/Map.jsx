import { useState } from "react";

const FormTask = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const update = (field) => (event) =>
    setForm((value) => ({ ...value, [field]: event.target.value }));

  return (
    <>
      <input
        placeholder="Name"
        value={form.name}
        onChange={update("name")}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={update("email")}
      />
      <button onClick={() => setForm({ name: "", email: "" })}>Clear</button>
    </>
  );
};

export default FormTask;
