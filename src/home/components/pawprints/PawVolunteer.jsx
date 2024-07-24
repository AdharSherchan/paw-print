import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const PawVolunteer = ({ items, setShow, length}) => {
  return (
    <div className="flex xl:flex-row flex-col w-fit xl:gap-[132px] p-5 gap-4 xl:shadow-none shadow-xl rounded-lg">
      <div className="flex justify-center">
        <img src={items.imagePath} className="object-contain xl:h-full h-[250px] xl:w-full w-[200px]" />
      </div>
      <div className="flex flex-col xl:my-[87px] m-0 xl:w-[815px] w-full xl:gap-[32px] gap-5">
        <img src="/public/quote.png" className="xl:w-[72px] w-[40px] xl:h-[72px] h-[40px]" />
        <p className="xl:text-[24px] text-[18px] work-sans xl:leading-[35px]">{items.content}</p>
        <p className="text-[18px] font-semibold montserrat">{items.fullName}</p>
        <div className="flex flex-row justify-center xl:justify-start gap-[16px]">
          <button className="flex rounded-full xl:h-[52px] h-[42px] xl:w-[52px] w-[42px] items-center justify-center bg-[#FDF7F4] hover:bg-[#8B4513] shadow-lg duration-500" onClick={() => setShow((prev) => (prev <= 0 ? length - 1 : prev - 1 ))}>
            <MdOutlineKeyboardArrowLeft className="h-[30px] w-[30px] text-[#D8C5B7]" />
          </button>
          <button  className="flex rounded-full xl:h-[52px] h-[42px] xl:w-[52px] w-[42px] items-center justify-center bg-[#FDF7F4] hover:bg-[#8B4513] shadow-lg duration-500" onClick={() => setShow((prev) => (prev === length - 1 ? 0: prev + 1))}>
            <MdOutlineKeyboardArrowRight className="h-[30px] w-[30px] text-[#D8C5B7]" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PawVolunteer;
