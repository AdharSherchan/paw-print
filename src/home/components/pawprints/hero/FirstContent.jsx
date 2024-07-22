import PawButton from "../PawButton";
import Font from "react-font";

const FirstContent = () => {
  return (
    <div className="xl:pr-[250px] xl:pl-[113px] xl:py-[112px] w-full p-10 ">
      <div className="flex lg:flex-row w-full flex-col items-center justify-between  ">
        <div className=" flex flex-col lg:ml-0 md:ml-[10px] lg:mr-[50px] lg:w-full lg:gap-[10px] gap-3">
          <p className="font-[Ultra] font-bold lg:text-[14px] md:text-[16px] lg:text-left text-center">
            SAVING LIVES EVERY DAY
          </p>
          <h1 className="font-[Montserrat] xl:text-[54px] md:text-[30px] text-[24px] lg:mt-[12px]  lg:text-left text-center">
            Saving lives of cats and dogs across world
          </h1>
          <p className="font-[Work Sans] lg:text-[18px] text-[16px] lg:mt-[20px] lg:text-left text-center">
            We advocate for vulnerable animals, providing safety while promoting
            responsible pet ownership. We uplift both animals and communities.
          </p>

          <PawButton text="About Us" className={"lg:block hidden"} />
        </div>
        <div className=" flex flex-col items-center justify-between gap-8 ">
          <div className="flex flex-row relative right-16 lg:right-0 ml-[150px] lg:ml-0 ">
            <div className="rounded-t-full lg:h-[560px] md:h-[320px] h-[210px] lg:w-[420px] md:w-[230px] w-[150px] bg-[#110227] lg:border-[8px] border-[2px] border-white "></div>
            <img
              src="public/animal-shelter-img-5 1.png"
              className="object-scale-down lg:object-contain absolute lg:-bottom-16 md:-bottom-8 md:right-2 -bottom-6 right-4 h-[200px] w-[120px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]"
            />
          </div>
          <PawButton text="About Us" className={"lg:hidden block"} />
        </div>
      </div>
    </div>
  );
};
export default FirstContent;
