import PawButton from "../PawButton"
import PawCalender from "../PawCalender"

const FifthContent = () => {
    const calender =[{date: '08', month: 'JUNE', eventname:'Disaster Relief for Animals', time:'07:00 AM - 10:00 PM', location: 'Kathmandu'},
        {date: '12', month: 'JUNE', eventname:'Rapid Response for Animals', time:'07:00 AM - 10:00 PM', location: 'Kathmandu'},
        {date: '17', month: 'JUNE', eventname:'Disaster Reflief for Animals', time:'07:00 AM - 10:00 PM', location: 'Kathmandu'}
    ]
    return(
        <div className="flex flex-col items-center justify-between xl:px-[250px] xl:py-[112px] p-10 cl:gap-[56px] gap-5 bg-[#FDF7F4]">
            <div className="flex flex-col items-center justify-between xl:gap-[12px] gap-3">
                <p className="text=[14px] text-[#8B4513]">CALENDER</p>
                <h2 className="xl:text-[42px] text-[25px] font-[Montserrat]">Event Schedule</h2>
                <p className="text-[18px] text-[#696F8C] xl:w-[900px] w-fit text-center">We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
            </div>
            <div className="flex xl:flex-row flex-col xl:gap-[32px] gap-3">
                {calender.map((date, index) => <PawCalender key={index} date={date} index={index} />)}
            </div>
            <PawButton text="View All" />

        </div>
    )
}
export default FifthContent