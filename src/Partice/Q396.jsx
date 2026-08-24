import { useReducer } from "react";
function reducer(cart, action) {
  if (action.type === "add") return [...cart, {
    id: Date.now(),
    name: "Book",
    quantity: 1
  }];
  if (action.type === "remove") return cart.slice(0, -1);
  return cart.map(item => ({
    ...item,
    quantity: item.quantity + 1
  }));
}
export default function Q396() {
  const [cart, dispatch] = useReducer(reducer, []);
  return <div><button onClick={() => dispatch({
      type: "add"
    })}>Add</button><button onClick={() => dispatch({
      type: "update"
    })}>Update quantity</button><button onClick={() => dispatch({
      type: "remove"
    })}>Remove</button><output>{cart.length} items</output></div>;
}
