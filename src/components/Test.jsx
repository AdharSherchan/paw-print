import { useState } from "react";
import { useEffect } from "react";

const Test = () => {
    const [count, setCount] = useState(0);
    console.log("AD")
    useEffect(() =>{
        console.log('Ravi')
    }, [count])
    
    return(
        <div className="flex flex-row h-screen w-full items-center justify-center size-32 font-bold">
            <p className="flex items-center justify-center h-12 w-10 border border-black"> {count} </p>
            <button onClick={() => setCount(count + 1)} className="border border-black h-12 w-32">Click Here:</button>
        </div>
    )
}
export default Test;