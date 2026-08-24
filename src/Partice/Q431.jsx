import { useMemo, useState } from "react";
export default function Q431() {
  const [quantity, setQuantity] = useState(1);
  const total = useMemo(() => quantity * 12, [quantity]);
  return <button onClick={() => setQuantity(value => value + 1)}>Cart total: ${total}</button>;
}
