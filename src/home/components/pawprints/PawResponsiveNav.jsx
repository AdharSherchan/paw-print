import { NavLink } from "react-router-dom";

const PawResponsiveNav = ({ setHamClick }) => {
  return (
    <div className="flex xl:hidden">
      <div className="flex flex-col  right-0 min-h-screen w-[70%] bg-white top-0 fixed transition duration-300 gap-20 z-50 ">
        <div className="">
          <button onClick={() => setHamClick(false)} className="text-2xl p-3 font-semibold">X</button>
        </div>
        <div className="flex flex-col gap-5 m-5  ">
          <p className="text-2xl font-semibold  ">Paw Prints</p>
          <div className="flex flex-col gap-y-5">
            <NavLink className="py-[8px] text-xl">Campaigns & Topics</NavLink>
            <NavLink className=" py-[8px] text-xl"> Animals</NavLink>
            <NavLink className="py-[8px]  text-xl"> About Us</NavLink>
            <NavLink className="py-[8px]  text-xl"> Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PawResponsiveNav;
