import { useEffect,useState } from "react";
function UseEffectfun() {
    const [update, setUpdate] = useState('')
    const [update2, setUpdate2] = useState('')
    useEffect(() => {
        console.log("i am updating")
    }, []);

    useEffect(() => {
        console.log("i am updating")
    }, [update]);
    
    useEffect(()=> {
        console.log("i am udate2")
    },[update2])
    return (
        <div>
            <h1>hi i am use effect{update}</h1>
            <button onClick={() => { setUpdate("updated") }}>update</button>
            <button onClick={() => { setUpdate2("updating") }}>update</button>
        </div>
    )
} export default UseEffectfun;