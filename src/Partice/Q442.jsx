import { useReducer, useState } from "react";
export default function Q442() {
  const [messages, dispatch] = useReducer((list, action) => [...list, action], []);
  const [text, setText] = useState("");
  return <form onSubmit={event => {
    event.preventDefault();
    if (text) {
      dispatch(text);
      setText("");
    }
  }}><input value={text} onChange={event => setText(event.target.value)} /><button>Send</button><output>{messages.join(" | ")}</output></form>;
}
