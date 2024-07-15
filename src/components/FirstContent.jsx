const FirstContent = () => {
  return (
    <div className="flex xl:flex-row flex-col items-center justify-between xl:mb-[109px] mb-[50px]  border border-fuchsia-600">
      <div className="flex flex-col items-center ml-[85px] gap-[16px] ">
        <img src="/public/Frame 7.png" className="xl:block hidden"/>
        <img src="/public/Frame 8.png" className="xl:block hidden"/>
      </div>
      <div className=" flex flex-col lg:ml-[10px] lg:mr-[50px] lg:w-[650px] gap-[10px] p-[18px]">
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
      <div className="flex xl:mr-[220px] xl:ml-[50px] ml-[200px] border border-yellow-400">
        <img src="/public/hero-image.png" className="object-scale-down xl:object-contain h-[200px] w-[200px] md:h-[423px] md:w-[400px] xl:h-[632px] xl:w-[420px]" />
      </div>
    </div>
  );
};
export default FirstContent;
