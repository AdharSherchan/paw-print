import { useState } from "react";
import { useEffect } from "react";

const Test = () => {
    const [count, setCount] = useState(0);
    console.log("AD")
    useEffect(() =>{
        console.log('Ravi')
    }, [count])
    

    const [seeValue, setSeeValue] = useState('')
    console.log(seeValue)

    
    return(
        <div className="flex flex-col h-screen w-full items-center justify-center size-32 font-bold gap-[32px]">
            <div className="flex flex-row">
            <p className="flex items-center justify-center h-12 w-10 border border-black"> {count} </p>
            <button onClick={() => setCount(count + 1)} className="border border-black h-12 w-32">Click Here:</button>
            </div>
            <div className="flex flex-col">
                <form className="flex gap-[32px]">
                    <input type="text" placeholder="10.00" className="border 1px" value={seeValue} onChange={(e) => setSeeValue(e.target.value)} />
                    <button type="button" onClick={() => setSeeValue((10))}>10$</button>
                    <button type="button" onClick={() => setSeeValue((20))}>20$</button>
                </form>
                

            </div>
            
        </div>
    )
}
export default Test;