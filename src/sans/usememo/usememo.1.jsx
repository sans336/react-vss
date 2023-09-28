import { useMemo ,useState } from "react";
const Appusememo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
     const calculation = useMemo(() => expensiveCalculation(count),[count]);


     const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
    };
    
    return (
        <div>
            <div>
                <h2>my todos</h2>
                {/* {todos.maps((todos, index) => {
                    return <p key={index}>{todos}</p>
                })} */}
                {todos}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
        </div>
    )
}
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
export default Appusememo;