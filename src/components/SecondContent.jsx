const SecondContent = () => {
  return (
    <div className="bg-white px-[250px] py-[112px]">
      <div className="flex flex-col items-center justify-center gap-[56px] ">
        <div className="flex flex-col w-[936px] gap-[12px]">
          <p className="text-[14px] text-[#8B4513] font-bold text-center">
            WHO WE ARE AND OUR MISSION
          </p>
          <h2 className="text-[42px] text-center">
            About our shelter and values
          </h2>
          <p className="text-[18px] text-[#696F8C] text-center mt-[12px]">
            We advocate for vulnerable animals, providing safety while promoting
            responsible pet ownership. We uplift both animals and communities.
          </p>
        </div>
        <div className="flex flex-row justify-between items-center gap-[40px]">
          <div className="flex flex-col gap-[24px] w-[593px] text-wrap">
            <h3 className="text-[36px] font-[Montserrat]">
              Your donations help us run important projects
            </h3>
            <p className="text-[18px] font-[work sans] text-[#696F8C]">
              As a pioneer of the no-kill movement, Paw Print leads the way with
              national and international programs designed to increase adoptions
              and raise awareness about the plight of homeless animals,
              continuing to make a significant impact.
            </p>
            <div className="flex justify-start mt-[24px]">
              <p className="px-[40px] py-[16px] bg-[#8B4513] text-white rounded-lg text-[18px]">
                Donate Here
              </p>
            </div>
          </div>
          <div>
            <img
              src="/public/Rectangle 4.png"
              className=" object-contain h-[430px] w-[747px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondContent;
