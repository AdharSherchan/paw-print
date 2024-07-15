import { NavLink } from "react-router-dom";

const PawNavbar = () => {
  return (
    <div className="flex flex-row justify-between xl:gap-[252px] rounded-xl bg-white ">
      <div className="flex flex-row items-center justify-between my-[24px] ml-[28px] gap-[32px]">
        <p>pawprints</p>
        <div>
            <NavLink className="py-[8px] px-[24px]">
                Campaigns & Topics
            </NavLink>
            <NavLink className=" py-[8px] px-[24px]"> Animals</NavLink>
            <NavLink className="py-[8px] px-[24px]"> About Us</NavLink>
            <NavLink className="py-[8px] px-[24px]"> Contact</NavLink>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-between mr-[24px] my-[20px] gap-[16px]">
        <p className="py-[16px] px-[40px] border border-[#8B4513] text-[#8B4513] rounded-xl">Volunteer</p>
        <p className="py-[16px] px-[40px] bg-[#8B4513] text-white rounded-xl">Donate</p>
      </div>
    </div>
  );
};
export default PawNavbar;
