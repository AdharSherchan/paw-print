import { useState } from "react";
import PawRaised from "./PawRaised"

const PawCards =({items}) => {
    const [val, setVal] = useState("");
    

    return(
        <div className="flex flex-col xl:min-h-[636px] xl:w-[452px] w-[300px] rounded-xl shadow-lg bg-white hover:scale-95 transition-all duration-300">
            <div>
                <img src={items.img} className="object-cover xl:h-[302px] h-[200px] xl:w-[452px] w-[300px] rounded-t-xl" />
            </div>
            <div className="flex flex-col justify-center items-center w-full bg-[#FDF7F4] font-semibold p-[32px]">
            <PawRaised setVal={setVal} value={val} />
            </div>
            <div className="flex flex-col xl:gap-[16px] gap-2 xl:m-[32px] m-5">
                <h5 className="xl:text-[26px] text-[22px] montserrat font-medium">{items.title}</h5>
                <p className="text-[16px] text-[#696F8C]">{items.description}</p>
                <div className="flex flex-row">
                    <button type="button" className="text-[14px] text-[#8B4513]">VIEW DETAILS</button>
                    <img src="/arrow.png" />
                </div>
            </div>

        </div>
    )
}
export default PawCards