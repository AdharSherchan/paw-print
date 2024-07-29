import PawButton from "./PawButton";
import { useEffect } from "react";
import { useState } from "react";

const PawNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [topPosition, setTopPosition] = useState(5);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <div
      className={` ${
        scrollPosition > 100 ? "top-0 bg-[#FDF7F4] shadow-md" : "top-4"
      } xl:flex flex-row  justify-between left-1/2 -translate-x-1/2 xl:gap-[252px] rounded-xl bg-white fixed w-[80%]  z-50  transition-all duration-500 hidden`}
    >
      <div className=" xl:flex flex-row  justify-between w-full">
        <div className="flex flex-row items-center justify-between my-[24px] ml-[28px]">
          <div className="flex flex-row items-center justify-between gap-[32px]">
            <a href="#Pawprint" className="oleo-script font-bold text-[25px] text-[#8B4513]">
              Paw Prints
            </a>
            <div className="h-[48px] border-[1px] border-gray-200"></div>
            <div className="flex flex-row justify-between py-[8px] px-[24px] ">
            <a
                href="#Campaign"
                onClick={() => handleSetActive('Campaign')}
                className={`py-[8px] px-[24px] hover:text-[#8B4513] hover:scale-105 transition-all duration-300 ${
                  activeSection === 'Campaign' ? 'text-[#8B4513]' : ''
                }`}
              >
                Campaigns & Topics
              </a>
              <a
                href="#Animal"
                onClick={() => handleSetActive('Animal')}
                className={`py-[8px] px-[24px] hover:text-[#8B4513] hover:scale-105 transition-all duration-300 ${
                  activeSection === 'Animal' ? 'text-[#8B4513]' : ''
                }`}
              >
                Animals
              </a>
              <a
                href="#About"
                onClick={() => handleSetActive('About')}
                className={`py-[8px] px-[24px] hover:text-[#8B4513] hover:scale-105 transition-all duration-300 ${
                  activeSection === 'About' ? 'text-[#8B4513]' : ''
                }`}
              >
                About Us
              </a>
              <a
                href="#Contact"
                onClick={() => handleSetActive('Contact')}
                className={`py-[8px] px-[24px] hover:text-[#8B4513] hover:scale-105 transition-all duration-300 ${
                  activeSection === 'Contact' ? 'text-[#8B4513]' : ''
                }`}
              >
                Contact
              </a>




            </div>
          </div>
        </div>
        <div className=" flex flex-row items-center justify-between mr-[24px] my-[20px] gap-[16px] ">
          <PawButton
            className={
              "work-sans border border-[#8B4513] bg-white !text-[#8B4513] py-[8px]"
            }
          >
            Volunteer
          </PawButton>
          <PawButton className={"work-sans text-white py-[8px]"}>
            Donate
          </PawButton>
        </div>
      </div>
    </div>
  );
};
export default PawNavbar;
