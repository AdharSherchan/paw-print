import PawButton from "./PawButton";

const FirstContent = () => {
  return (
    <div className="flex xl:flex-row flex-col items-center justify-between xl:ml-[113px] xl:mr-[250px] xl:mb-[112px] p-5 xl:gap-[183px] xl:pt-[225px] border border-pink-400 ">
      <div className=" flex flex-col xl:ml-0 lg:ml-[10px] lg:mr-[50px] lg:w-[650px] xl:gap-[10px] gap-3">
        <p className="font-[Work Sans] font-bold xl:text-[14px] md:text-[16px] xl:text-left text-center">
          SAVING LIVES EVERY DAY
        </p>
        <h1 className="font-[Montserrat] lg:text-[54px] text-[24px] xl:mt-[12px]  xl:text-left text-center">
          Saving lives of cats and dogs across world
        </h1>
        <p className="font-[Work Sans] lg:text-[18px] text-[16px] lg:mt-[20px] ">
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </p>
        
          <PawButton text="About Us" />
      </div>
      <div className="flex flex-row relative right-0 ml-[150px] xl:ml-0 ">
        <div className="rounded-t-full xl:h-[560px] h-[210px] xl:w-[420px] w-[150px] bg-[#110227] xl:border-[8px] border-[2px] border-white "></div>
        <img
          src="public/animal-shelter-img-5 1.png"
          className="object-scale-down xl:object-contain absolute xl:-bottom-16 -bottom-8 right-5 h-[200px] w-[120px] md:h-[423px] md:w-[400px] xl:h-[500px] xl:w-[500px]"
        />
      </div>
    </div>
  );
};
export default FirstContent;
