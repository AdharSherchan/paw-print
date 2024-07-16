const PawCalender = ({date, index}) => {
  return (
    <div className="flex flex-col p-[32px] gap-[56px] bg-[#FBEFE9] shadow-lg">
      <div className="">
        <p className="text-[56px]">{date.date}</p>
        <p className="text-[16px] text-[#696F8C]">{date.month}</p>
      </div>
      <div className="gap-[32px]">
        <h5 className="text-[26px]">{date.eventname}</h5>
        <div className="text-[18px]">
          <p>{date.time}</p>
          <p>{date.location}</p>
        </div>
      </div>
    </div>
  );
};
export default PawCalender;
