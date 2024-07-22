import { NavLink } from "react-router-dom";
import PawButton from "./PawButton";
import { useEffect } from "react";
import { useState } from "react";

const PawNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [topPosition, setTopPosition] = useState(5)

  const handleScroll =() => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive:true})
    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  console.log('Scrollposition',scrollPosition)


  return (
      <div className= {` ${scrollPosition > 100 ? "top-0 bg-[#f7e2d8] " : "top-4"} xl:flex flex-row  justify-between left-1/2 -translate-x-1/2 xl:gap-[252px] rounded-xl bg-white fixed w-[80%]  z-50  transition-all duration-500 hidden`}>
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

    
    
  );
};
export default PawNavbar;
