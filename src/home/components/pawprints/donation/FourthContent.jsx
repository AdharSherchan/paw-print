import { useState } from "react";
import PawPrice from "../PawPrice";
import PawRaised from "../PawRaised";
import PawButton from "../PawButton";
import { FaArrowRightLong } from "react-icons/fa6";
import { money } from "../../../contstant/data";

const FourthContent = () => {
  const [val, setVal] = useState("");

  return (
    <div className="flex md:flex-row flex-col items-center justify-between work-sans bg-white w-full xl:px-[250px] xl:py-[112px] p-10 xl:gap-x-32 gap-8  ">
      <div className="flex  justify-center xl:justify-start items-center shadow-lg relative w-fit "> 
        <div className=" relative xl:h-[669px] h-[300px] xl:w-[400px] w-[200px]">
        <img src="/DogP4.png" className=" object-cover  w-full h-full rounded-md" />
        <img src="/Logos.png" className="absolute object-contain xl:h-[200px] h-[100px]  xl:w-[90px] xl:-right-10 -right-4 xl:bottom-10 bottom-5 z-10 " />
        </div>
       
      </div>
      <div className="flex flex-col w-full xl:gap-[24px] gap-2 min-w-[50%]  ">
        <div className="flex flex-col xl:items-start items-center justify-center xl:gap-[12px] gap-2 ">
          <p className=" xl:text-[14px]  w-fit text-[18px] text-[#8B4513] font-semibold ">
            A HELP TO THOSE WHO NEED IT
          </p>
          <h2 className="xl:text-[42px] text-[22px] montserrat font-medium ">
            Transform lives with donations
          </h2>
          <p className="text-[18px] text-[#696F8C] xl:text-left text-center">
            Your donation can save lives. Help us provide care and find loving
            homes for rescued animals. Every contribution counts. Donate now!
          </p>
        </div>
        <div className="flex flex-col xl:gap-[24px] gap-7">
          <PawRaised setVal={setVal} value={val} />
          <div className="xl:gap-[24px]">
            <form className="">
              <button
                type="button"
                className="xl:px-[24px] xl:py-[16px] py-4 px-5 border 1px"
              >
                {" "}
                ${" "}
              </button>
              <input
                type="text"
                placeholder="10.00"
                className="xl:px-[24px] px-6 xl:py-[16px] py-4 border 1px"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
            </form>
            <div className=" flex flex-row flex-wrap gap-[8px]">
              {money.map((items, index) => (
                <PawPrice
                  key={index}
                  items={items}
                  index={index}
                  setVal={setVal}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="">
        <PawButton
          className={"work-sans flex items-center justify-center gap-3 "}
        >
          Donate Now <FaArrowRightLong />
        </PawButton>

        </div>
      </div>
    </div>
  );
};
export default FourthContent;
