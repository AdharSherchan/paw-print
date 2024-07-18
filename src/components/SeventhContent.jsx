import PawButton from "./PawButton";

const SeventhContent = () => {
  return (
    <div className=" bg-white xl:mb-[52px] border border-purple-500">
      <div className="flex xl:flex-row flex-col items-center xl:justify-center justify-between xl:mx-[250px] xl:gap-[24px] p-5 gap-5 rounded-lg relative bg-[#8B4513] overflow-hidden border border-green-500">
        <div className="flex flex-col border border-red-700">
          <div className="rounded-full xl:h-[420px] h-[200px] xl:w-[420px] w-[200px] xl:border-[56px] border-[35px] border-[#A8D5BA] absolute xl:-top-48 -top-20 xl:-left-48 -left-20 ">
            {" "}
          </div>
          <img
            src="public/golden.png"
            className="h-[220px] w-[250px] absolute bottom-0 left-2 "
          />
        </div>
        <div className="flex flex-col w-[850px] items-center justify-center xl:py-[56px] xl:gap-[24px] gap-4 text-white border border-green-600 ">
          <h2 className="xl:text-[42px] text-[22px] font-bold">Get Involved</h2>
          <p className="xl:text-[18px] text-[16px] text-center ">
            Our work is made possible by the generosity of people like you, who
            have contributed to our mission to improve the lives of all animals.
          </p>
          <div className="flex flex-row gap-[16px]">
            <PawButton
              text="Adopt & Donate to help us"
              className={
                "xl:!px-[40px] !py-[10px] !text-[#8B4513] bg-white rounded-lg"
              }
            />
            <PawButton
              text="Volunteering opportunities"
              className={
                "xl:!px-[40px] !py-[10px] !text-[#8B4513] bg-white rounded-lg"
              }
            />
          </div>
        </div>
        <div className="">
          <div className="rounded-full xl:h-[420px] h-[200px] xl:w-[420px] w-[200px] xl:border-[56px] border-[35px] border-[#A8D5BA] absolute xl:-bottom-52 -bottom-20 xl:-right-52 -right-20">
            {" "}
          </div>
          <img
            src="public/animal-shelter-img-5 1.png"
            className="h-[220px] w-[180px] object-contain absolute bottom-0 right-2 "
          />
        </div>
      </div>
    </div>
  );
};
export default SeventhContent;
