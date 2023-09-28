//Code with useMemo which avoid loop on every re-render
import { useState } from "react";
import { useMemo } from "react";

const FuncComp2 = () => {
  const [userName, setUserName] = useState("");

  // Re-Calculated once only
  const counter = useMemo(
    () => {
      let counter = 0;
      for (let item = 0; item < 100; item++) {
        counter = counter + item;
      }
      return counter;
    
    },
   
    []
  
  );

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

export default FuncComp2;