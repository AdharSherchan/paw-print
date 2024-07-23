import { FaArrowRightLong } from "react-icons/fa6";
import PawButton from "../PawButton";

const SeventhContent = () => {
  return (
    <div className=" bg-white xl:mb-[52px]">
      <div className="flex xl:flex-row flex-col items-center work-sans xl:justify-center justify-between xl:mx-[250px] xl:gap-[24px] p-5 xl:pb-0 pb-28 gap-5 rounded-lg relative bg-[#8B4513] overflow-hidden ">
        <div className="flex flex-col  ">
          <div className="rounded-full xl:h-[420px] h-[200px] xl:w-[420px] w-[200px] xl:border-[56px] border-[35px] border-[#A8D5BA] absolute xl:-top-48 -top-20 xl:-left-48 -left-20 xl:block hidden ">
            {" "}
          </div>
          <img
            src="public/golden.png"
            className="xl:h-[220px] h-[160px] xl:w-[250px] w-[190px] absolute bottom-0 left-20  "
          />
        </div>
        <div className="flex flex-col xl:w-[60%] w-full items-center justify-center xl:py-[56px] xl:gap-[24px] gap-4 text-white  ">
          <h2 className="xl:text-[42px] text-[22px] font-bold montserrat">
            Get Involved
          </h2>
          <p className="xl:text-[18px] text-[16px] text-center font-normal ">
            Our work is made possible by the generosity of people like you, who
            have contributed to our mission to improve the lives of all animals.
          </p>
          <div className="flex flex-row gap-[16px]">
            <PawButton
              className={"work-sans flex items-center justify-center gap-3 xl:!px-[40px] !py-[10px] !text-[#8B4513] bg-white rounded-lg"}
            >
              Adopt & Donate to help us <FaArrowRightLong />
            </PawButton>
            <PawButton
              className={"work-sans flex items-center justify-center gap-3 xl:!px-[40px] !py-[10px] !text-[#8B4513] bg-white rounded-lg"}
            >
              Volunteering opportunities <FaArrowRightLong />
            </PawButton>
          </div>
        </div>
        <div className="">
          <div className="rounded-full xl:h-[420px] h-[200px] xl:w-[420px] w-[200px] xl:border-[56px] border-[35px] border-[#A8D5BA] absolute xl:-bottom-52 -bottom-20 xl:-right-52 -right-20 xl:block hidden ">
            {" "}
          </div>
          <img
            src="public/animal-shelter-img-5 1.png"
            className="xl:h-[220px] h-[170px] xl:w-[180px] w-[190px] object-contain absolute -bottom-4 right-12  "
          />
        </div>
      </div>
    </div>
  );
};
export default SeventhContent;
