//Code without useMemo which will run loop again & again each re-render
import { useState } from "react";

const FuncComp = () => {
  const [userName, setUserName] = useState("");

  // Re-Calculated everytime on re-render
  let counter = 0;
  for (let item = 0; item < 100; item++) {
    counter = counter + item;
  }
  return (
    <div>
      <p>Counter: {counter}</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default FuncComp;