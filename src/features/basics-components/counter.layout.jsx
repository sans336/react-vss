import { useState } from "react";
const Counter = () => {
  const [counterVal, setCounterVal] = useState(0);

  return (
    <div style={{ backgroundColor: "tomato", width: "300px", padding: 12 }}>
      <p>Counter : {counterVal}</p>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => setCounterVal((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCounterVal((prevCount) => prevCount - 1)}>
          Decrement
        </button>
      </div>
      <p>So the number so far is : {counterVal}</p>
      <p>So the number so far is 2 : {counterVal}</p>
      <p>So the number so far is 3 : {counterVal}</p>
      <p>So the number so far is 4 : {counterVal}</p>
      <p>So the number so far is 5 : {counterVal}</p>
      <p>So the number so far is 6 : {counterVal}</p>
      <p>So the number so far is 7 : {counterVal}</p>
    </div>
  );
};

export default Counter;