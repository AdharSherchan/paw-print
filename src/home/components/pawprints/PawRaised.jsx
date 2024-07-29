import { useState } from "react";
import PawSlider from "./PawSlider";

const PawRaised = ({setVal, value}) => {
  return (
     <div className="flex flex-col w-full xl:gap-[16px] gap-4 ">
      <div className="flex flex-row items-center justify-between font-medium">
        <p className="text-[16px] ">GOAL : $1340</p>
        <p className="text-[16px] ">RAISED : $ {value}</p>
      </div>
      <div>
        <PawSlider setVal={setVal} />
      </div>
    </div>
  );
};
export default PawRaised;
