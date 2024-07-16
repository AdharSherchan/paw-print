import PawCalender from "./PawCalender"

const FifthContent = () => {
    const calender =[{date: '08', month: 'JUNE', eventname:'Disaster Relief for Animals', time:'07:00 AM - 10:00 PM', location: 'Kathmandu'},
        {date: '12', month: 'JUNE', eventname:'Rapid Response for Animals', time:'07:00 AM - 10:00 PM', location: 'Kathmandu'},
        {date: '17', month: 'JUNE', eventname:'Disaster Reflief for Animals', time:'07:00 AM - 10:00 PM', location: 'Kathmandu'}
    ]
    return(
        <div className="flex flex-col items-center justify-between px-[250px] py-[112px] gap-[56px] bg-[#FDF7F4]">
            <div className="flex flex-col items-center justify-between gap-[12px]">
                <p className="text=[14px] text-[#8B4513]">CALENDER</p>
                <h2 className="text-[42px] font-[Montserrat]">Event Schedule</h2>
                <p className="text-[18px] text-[#696F8C] w-[900px] text-center">We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
            </div>
            <div className="flex flex-row gap-[32px]">
                {calender.map((date, index) => <PawCalender key={index} date={date} index={index} />)}
            </div>
            <div className="flex justify-start items-end">
            <p className=" xl:py-[16px] py-[8px] xl:px-[40px] px-[20px] xl:text-[18px] text-[14px] font-[Work Sans] bg-[#8B4513] text-white rounded-xl">
                View All
            </p>
            </div>

        </div>
    )
}
export default FifthContent