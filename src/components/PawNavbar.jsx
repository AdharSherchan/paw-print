import { NavLink } from "react-router-dom";
import PawButton from "./PawButton";

const PawNavbar = () => {
  return (
      <div className="xl:flex hidden items-center justify-center sticky top-0 z-50 bg-none border-[4px] border-cyan-500">
      <div className="flex flex-row justify-between mx-[250px] xl:gap-[252px] rounded-xl  bg-white   ">
        <div className="flex flex-row items-center justify-between my-[24px] ml-[28px] ">
          <div className="flex flex-row items-center justify-between gap-[32px]">
          <p>pawprints</p>
          <div>
            <NavLink className="py-[8px] px-[24px]">Campaigns & Topics</NavLink>
            <NavLink className=" py-[8px] px-[24px]"> Animals</NavLink>
            <NavLink className="py-[8px] px-[24px]"> About Us</NavLink>
            <NavLink className="py-[8px] px-[24px]"> Contact</NavLink>
          </div>

          </div>
        </div>
        <div className=" flex flex-row items-center justify-between mr-[24px] my-[20px] gap-[16px] rounded-xl ">
          <PawButton text="Volunteer" className={"border border-[#8B4513] bg-white !text-[#8B4513] py-[8px] "} />
          <PawButton text="Donate" className={" text-white py-[8px]"} />
        </div>
        
      </div>
    </div>

    
    
  );
};
export default PawNavbar;
