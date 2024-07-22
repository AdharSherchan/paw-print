const PawCalender = ({date, index}) => {
  return (
    <div className="flex flex-col xl:p-[32px] p-4 xl:gap-[56px] gap-5 bg-[#FBEFE9] shadow-lg">
      <div className="">
        <p className="xl:text-[56px] text-[40px]">{date.date}</p>
        <p className="text-[16px] text-[#696F8C]">{date.month}</p>
      </div>
      <div className="xl:gap-[32px] gap-5">
        <h5 className="xl:text-[26px] text-[22px]">{date.eventname}</h5>
        <div className="text-[18px]">
          <p>{date.time}</p>
          <p>{date.location}</p>
        </div>
      </div>
    </div>
  );
};
export default PawCalender;
