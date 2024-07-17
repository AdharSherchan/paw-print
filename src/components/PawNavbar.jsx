import { NavLink } from "react-router-dom";

const PawNavbar = () => {
  return (
      <div className="flex items-center justify-center mx-[250px] sticky top-0 z-50 border-[4px] border-cyan-500">
      <div className="flex flex-row justify-between xl:gap-[252px] rounded-xl  bg-white   ">
        <div className="flex flex-row items-center justify-between my-[24px] ml-[28px]">
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
        <div className=" flex flex-row items-center justify-between mr-[24px] my-[20px] gap-[16px]">
          <p className="py-[16px] px-[40px] border border-[#8B4513] text-[#8B4513] rounded-xl">
            Volunteer
          </p>
          <p className="py-[16px] px-[40px] bg-[#8B4513] text-white rounded-xl">
            Donate
          </p>
        </div>
      </div>
    </div>

    
    
  );
};
export default PawNavbar;
