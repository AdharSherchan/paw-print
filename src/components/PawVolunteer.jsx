
const PawVolunteer = ({ items, setShow, length}) => {
  return (
    <div className="flex xl:flex-row flex-col w-fit xl:gap-[132px] p-5 gap-4 shadow-xl rounded-lg">
      <div className="flex justify-center">
        <img src={items.imagePath} className="object-contain xl:h-full h-[250px] xl:w-full w-[200px]" />
      </div>
      <div className="flex flex-col xl:my-[87px] m-0 xl:w-[815px] w-full xl:gap-[32px] gap-5">
        <img src="/public/quote.png" className="xl:w-[72px] w-[40px] xl:h-[72px] h-[40px]" />
        <p className="xl:text-[24px] text-[18px]">{items.content}</p>
        <p className="text-[18px] font-semibold">{items.fullName}</p>
        <div className="flex flex-row justify-center xl:justify-start gap-[16px]">
          <button >
            <img src="/public/Frame 66.png" className="xl:h-[52px] h-[40px] xl:w-[52px] w-[40px] shadow-lg" onClick={() => setShow((prev) => (prev <= 0 ? length - 1 : prev - 1 ))} />
          </button>
          <button >
            <img src="/public/arrowright.png" className="xl:h-[52px] h-[40px] xl:w-[52px] w-[40px] shadow-lg" onClick={() => setShow((prev) => (prev === length - 1 ? 0: prev + 1))} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PawVolunteer;
