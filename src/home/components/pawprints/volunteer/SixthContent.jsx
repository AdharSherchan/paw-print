import { useEffect } from "react";
import { useState } from "react";
import PawVolunteer from "../PawVolunteer";

const SixthContent = () => {
  const [display, setDisplay] = useState([]);
  const [show, setShow] = useState(1)
  const fetchVolunteer = async () => {
    const response = await fetch(
      `https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json`
    );
    const items = await response.json();
    setDisplay(items.testimonial);
  };
  useEffect(() => {
    fetchVolunteer();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-white xl:px-[250px] xl:py-[112px] p-10 xl:gap-[56px] gap-5 work-sans ">
      <div className="flex flex-col justify-center w-full items-center gap-[12px] ">
        <p className="text-[14px] text-[#8B4513] font-semibold">TESTIMONIALS</p>
        <h2 className="xl:text-[42px] text-[25px] text-center montserrat font-medium">Check what our volunteers are saying</h2>
        <p className="text-[18px] text-[#696F8C] xl:w-[900px] w-fit text-center ">
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </p>
      </div>
      <div>
        {display.length && <PawVolunteer items={display[show]} setShow={setShow} length={display.length}  />}
      </div>
    </div>
  );
};
export default SixthContent;
