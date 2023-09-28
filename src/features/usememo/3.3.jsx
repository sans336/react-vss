import { useState } from 'react';
import Person from './3';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <Person name="Alice" age={25} />
      <Person name="Bob" age={30} />
    </div>
  );
}

export default App;