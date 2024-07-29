import { FaArrowRightLong } from "react-icons/fa6";
import PawButton from "../PawButton";
import PawCalender from "../PawCalender";
import { calender } from "../../../contstant/data";

const FifthContent = () => {
  
  return (
    <div id="Campaign" className="flex flex-col items-center justify-between xl:px-[250px] xl:py-[112px] p-10 xl:gap-[56px] gap-5 bg-[#FDF7F4] work-sans">
      <div className="flex flex-col items-center justify-between xl:gap-[12px] gap-3">
        <p className="text=[14px] text-[#8B4513] font-semibold">CALENDER</p>
        <h2 className="xl:text-[42px] text-[25px] montserrat font-medium">
          Event Schedule
        </h2>
        <p className="text-[18px] text-[#696F8C] xl:w-[900px] w-fit text-center">
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </p>
      </div>
      <div className="flex items-center justify-center xl:flex-row flex-wrap xl:flex-nowrap xl:gap-[32px] gap-5">
        {calender.map((date, index) => (
          <PawCalender key={index} date={date} index={index} />
        ))}
      </div>
      <PawButton
        className={"work-sans flex items-center justify-center gap-3 "}
      >
        View All <FaArrowRightLong />
      </PawButton>
    </div>
  );
};
export default FifthContent;
