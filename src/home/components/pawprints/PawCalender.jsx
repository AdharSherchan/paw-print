const PawCalender = ({date, index}) => {
  return (
    <div className="flex flex-col xl:p-[32px] p-4 xl:gap-[56px] gap-5 bg-[#FBEFE9] shadow-lg work-sans  hover:scale-105 transition-all duration-300">
      <div className="">
        <p className="xl:text-[56px] text-[40px] montserrat">{date.date}</p>
        <p className="text-[16px] text-[#696F8C]">{date.month}</p>
      </div>
      <div className="flex flex-col xl:gap-[32px] gap-3">
        <h5 className="xl:text-[24px] text-[22px] montserrat font-medium">{date.eventname}</h5>
        <div className="text-[18px]">
          <p>{date.time}</p>
          <p>{date.location}</p>
        </div>
      </div>
    </div>
  );
};
export default PawCalender;
