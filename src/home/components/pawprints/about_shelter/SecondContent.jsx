import PawButton from "../PawButton";

const SecondContent = () => {
  return (
    <div className="bg-white xl:px-[250px] xl:py-[112px] w-full p-10 ">
      <div className="flex flex-col items-center justify-center xl:gap-[56px] gap-2 ">
        <div className="flex flex-col xl:w-[936px] w-full xl:gap-[12px] gap-2 ">
          <p className=" text-[14px] text-[#8B4513] font-bold text-center">
            WHO WE ARE AND OUR MISSION
          </p>
          <h2 className="xl:text-[42px] text-[20px] text-center">
            About our shelter and values
          </h2>
          <p className="xl:text-[18px] text-[15px] w-fit text-[#696F8C] text-center xl:mt-[12px] m-0 ">
            We advocate for vulnerable animals, providing safety while promoting
            responsible pet ownership. We uplift both animals and communities.
          </p>
        </div>
        <hr className="xl:hidden w-full m-2 border 1px border-slate-400 block" />
        <div className="flex xl:flex-row flex-col justify-between items-center xl:gap-[40px] gap-2">
          <div className="flex flex-col xl:gap-[24px] gap-2 xl:w-[593px] w-full text-wrap">
            <h3 className="xl:text-[36px] text-[20px] font-[Montserrat] xl:text-left text-center">
              Your donations help us run important projects
            </h3>
            <p className="text-[16px] font-[work sans] text-[#696F8C] xl:text-left text-center">
              As a pioneer of the no-kill movement, Paw Print leads the way with
              national and international programs designed to increase adoptions
              and raise awareness about the plight of homeless animals,
              continuing to make a significant impact.
            </p>
            <div className=" xl:m-0 m-auto ">
            <PawButton text="Donate for pets" />
            </div>
          </div>
          <div>
            <img
              src="/public/Rectangle 4.png"
              className=" object-contain xl:h-[430px] h-[200px] xl:w-[747px] w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondContent;
