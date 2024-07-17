const FirstContent = () => {
  return (
      <div className="flex xl:flex-row flex-col items-center justify-between ml-[113px] mr-[250px] mb-[112px] gap-[183px] pt-[225px] ">
        <div className=" flex flex-col xl:ml-0 lg:ml-[10px] lg:mr-[50px] lg:w-[650px] gap-[10px] ">
          <p className="font-[Work Sans] font-bold xl:text-[14px] md:text-[16px]">
            SAVING LIVES EVERY DAY
          </p>
          <h1 className="font-[Montserrat] lg:text-[54px] text-[24px] xl:mt-[12px]">
            Saving lives of cats and dogs across world
          </h1>
          <p className="font-[Work Sans] lg:text-[18px] text-[15px] lg:mt-[20px]">
            We advocate for vulnerable animals, providing safety while promoting
            responsible pet ownership. We uplift both animals and communities.
          </p>
          <div className="flex justify-start items-end">
            <p className="xl:mt-[48px] xl:py-[16px] py-[8px] xl:px-[40px] px-[20px] xl:text-[18px] text-[14px] font-[Work Sans] bg-[#8B4513] text-white rounded-xl">
              About Us!
            </p>
          </div>
        </div>
        <div className="flex flex-row relative">
          <div className="rounded-t-full h-[560px] w-[420px] bg-[#110227] border-[8px] border-white"></div> 
          <img
            src="public/animal-shelter-img-5 1.png"
            className="object-scale-down xl:object-contain absolute -bottom-16 h-[100px] w-[100px] md:h-[423px] md:w-[400px] xl:h-[500px] xl:w-[500px]"
          />
        </div>
      </div>
  );
};
export default FirstContent;
