import { useEffect, useState } from "react";
export default function Q393() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const timer = setInterval(() => setMessages(items => [...items, `message ${items.length + 1}`]), 1500);
    return () => clearInterval(timer);
  }, []);
  return <output>{messages.join(", ") || "Subscribed"}</output>;
}
