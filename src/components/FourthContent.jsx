import PawPrice from "./PawPrice";
import PawRaised from "./PawRaised";

const FourthContent = () => {
  const money = [
    { price: "$10" },
    { price: "$25" },
    { price: "$50" },
    { price: "$100" },
    { price: "$250" },
  ];
  return (
    <div className="flex flex-row items-center px-[250px] py-[112px] gap-[153px]">
      <div className="flex flex-row shadow-lg relative">
        <img src="/public/DogP4.png" className="relative " />
        <img src="/public/Logos.png" className="absolute -right-5 bottom-0" /> 
      </div>
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <p className="text-[14px] text-[#8B4513]">
            A Help to those who need it
          </p>
          <h2 className="text-[42px]">Transform lives with donations</h2>
          <p className="text-[18px] text-[#696F8C]">
            Your donation can save lives. Help us provide care and find loving
            homes for rescued animals. Every contribution counts. Donate now!
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <PawRaised />
          <div className="gap-[24px]">
            <form className="">
              <button type="button" className="px-[24px] py-[16px] border 1px">
                {" "}
                ${" "}
              </button>
              <input
                type="text"
                placeholder="10.00"
                className="px-[24px] py-[16px] border 1px"
              />
            </form>
            <div className=" flex flex-row gap-[8px]">
              {money.map((items, index) => (
                <PawPrice key={index} items={items} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-end">
          <p className=" xl:py-[16px] py-[8px] xl:px-[40px] px-[20px] xl:text-[18px] text-[14px] font-[Work Sans] bg-[#8B4513] text-white rounded-xl">
            Donate Now
          </p>
        </div>
      </div>
    </div>
  );
};
export default FourthContent;
