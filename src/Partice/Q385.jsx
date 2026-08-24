import { useEffect, useRef, useState } from "react";
export default function Q385() {
  const [items, setItems] = useState(["First"]);
  const sentinel = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setItems(list => [...list, `Item ${list.length + 1}`]);
    });
    observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, []);
  return <div>{items.join(", ")}<div ref={sentinel}>Scroll sentinel</div></div>;
}
