import { useState } from "react";
import Child from "./yt"

const AppMemo = () => {
    const [count, setCount] = useState(0)
    const increasecount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>performance</h1>
            <Child />
            <button onClick={increasecount}>increment</button>
        </div>
    )
};
export default AppMemo;