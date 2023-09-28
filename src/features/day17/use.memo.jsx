import { useEffect, useState } from "react";

const CounterWithUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let result = 0;
    for (let i = 0; i < 10; i++) {
      console.log({ i });
      result += i;
    }

    setSum(result);
    //It is re-rendering twice even if it is having an
    //empty dependency as state is being changed
    //and we do not write the code of state directly in the 
    //root as it will get stuck in the loop.
  }, []);

  console.log("Re-Render");

  return (
    <div>
      <p>Sum: {sum} </p>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default CounterWithUseEffect;