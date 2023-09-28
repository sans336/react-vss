import { useState } from "react";
function Funapps() {
    const [count,setcount]=useState(0)
    return (
        <div>
            <h1>hooks in functional component {count}</h1>
            <button onClick={()=>{setcount(count+1)}}>
                Increment
            </button>
        </div>
    )
} export default Funapps;
    
