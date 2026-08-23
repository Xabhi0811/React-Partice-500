import { useState } from "react";

const Q342 = () => {
  const [user, setUser] = useState({ address: { city: "Bhopal" } });
  return (
    <button
      onClick={() =>
        setUser((current) => ({
          ...current,
          address: { ...current.address, city: "Indore" },
        }))
      }
    >
      {user.address.city}
    </button>
  );
};

export default Q342;
