const PawResponsiveNav = ({ setHamClick }) => {
  return (
    <div className="flex xl:hidden">
      <div className="flex flex-col  right-0 min-h-screen w-[70%] bg-white top-0 fixed transition duration-500 gap-20 z-50 ">
        <div className="">
          <button onClick={() => setHamClick(false)} className="text-2xl p-3 font-semibold">X</button>
        </div>
        <div className="flex flex-col gap-5 m-5  ">
          <a href="#Pawprint" className="text-2xl font-semibold" onClick={() => setHamClick(false)}>Paw Prints</a>
          <div className="flex flex-col gap-y-5">
            <a href="#Campaign" className="py-[8px] text-xl" onClick={() => setHamClick(false)}>Campaigns & Topics</a>
            <a href="#Animal" className=" py-[8px] text-xl" onClick={() => setHamClick(false)}> Animals</a>
            <a href="#About" className="py-[8px]  text-xl" onClick={() => setHamClick(false)}> About Us</a>
            <a href="#Contact" className="py-[8px]  text-xl" onClick={() => setHamClick(false)}> Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PawResponsiveNav;
