import { useEffect ,useState } from "react";
function Didmount() {
    const[counter,setCounter]=useState(0)
    useEffect(() => {
        console.log("i am blank")
    },[])
    return (
        <div><h1>hi good morning
         {counter}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>Increment</button></div>
        
    );
    
}
export default Didmount;