import RangeSlider from 'react-range-slider-input';
import { useEffect } from "react";
import { useState } from "react";

const PawAnimationButton = () => {
  const [data, setData] = useState(0);
  
  return (
    <div className="flex flex-col items-center justify-center gap-20 m-20">
      <div className="flex flex-row gap-20">
        <button className=" flex group items-end justify-start bg-amber-700 h-20 w-36 overflow-hidden">
          <div className="h-5 w-5 -bottom-2 rounded-full bg-green-200 group-hover:bg-yellow-200 group-hover:scale-[50] ease-in-out duration-1000"></div>
        </button>
        <button className=" flex group items-end justify-start bg-amber-700 h-20 w-36 overflow-hidden">
          <div className="h-full w-1  bg-none group-hover:bg-yellow-200 group-hover:scale-x-[100] ease-in-out duration-1000"></div>
        </button>
      </div>
      <div className="flex justify-center items-center relative">
        <input
          type="range"
          min="0"
          max="100"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="slider accent-[#8B4513] h-[8px] w-[816px]"
        />
        <div>{data}</div>
      </div>
    

    </div>
  );
};
export default PawAnimationButton;
