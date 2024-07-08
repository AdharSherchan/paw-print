import Navbar from "./Navbar";
import ResponsiveNav from "./ReponsiveNav";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MemeAbout = () => {
  const [hamClick, setHamClick] = useState(false);
  return (
    <div className="flex flex-col lg:items-center lg:justify-center h-screen  bg-indigo-300">
      <div className="flex items-center justify-center w-[80%] ">
        <div className="flex justify-end w-full  ">
          <button
            type="submit"
            className="text-white size-10 m-1 object-contain  lg:hidden"
            onClick={() => setHamClick(true)}
          >
            <GiHamburgerMenu className="text-white size-5 m-1" />
          </button>
        </div>
        {hamClick && <ResponsiveNav setHamClick={setHamClick} />}
        {/* <h1 className="xl:text-6xl text-xl xl:mt-3 h-fit w-fit text-black font-bold font-serif "> HOUSE OF MEMES </h1> */}
        <Navbar />
      </div>
      <div className="flex items-center justify-center border border-yellow-300">
        <h1 className="text-3xl font-bold text-red-300">THIS IS ABOUT ME!</h1>
      </div>
    </div>
  );
};
export default MemeAbout;
