import { useState } from "react";
import PawPrice from "../PawPrice";
import PawRaised from "../PawRaised";
import PawButton from "../PawButton";
import { FaArrowRightLong } from "react-icons/fa6";

const FourthContent = () => {
  const [val, setVal] = useState("");
  const money = [
    { price: "10.00" },
    { price: "25.00" },
    { price: "50.00" },
    { price: "100.00" },
    { price: "250.00" },
  ];
  console.log("VALUE", val);
  return (
    <div className="flex flex-row items-center work-sans bg-white w-full xl:px-[250px] xl:py-[112px] p-10 xl:gap-[153px] gap-5 ">
      <div className="xl:flex flex-row shadow-lg relative hidden">
        <img src="/public/DogP4.png" className="relative " />
        <img src="/public/Logos.png" className="absolute -right-5 bottom-0" />
      </div>
      <div className="flex flex-col w-full xl:gap-[24px] gap-2 ">
        <div className="flex flex-col xl:items-start items-center justify-center xl:gap-[12px] gap-2 ">
          <p className="w-fit xl:text-[14px] text-[18px] text-[#8B4513] font-semibold ">
            A HELP TO THOSE WHO NEED IT
          </p>
          <h2 className="xl:text-[42px] text-[22px] montserrat font-medium text-center ">
            Transform lives with donations
          </h2>
          <p className="text-[18px] text-[#696F8C] text-center ">
            Your donation can save lives. Help us provide care and find loving
            homes for rescued animals. Every contribution counts. Donate now!
          </p>
        </div>
        <div className="flex flex-col xl:gap-[24px] gap-7">
          <PawRaised />
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
