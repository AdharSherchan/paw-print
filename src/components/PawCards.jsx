import PawRaised from "./PawRaised"

const PawCards =({items, index}) => {

    return(
        <div className="flex flex-col w-[452px] rounded-xl shadow-lg bg-white">
            <div>
                
                <img src={items.img} className="h-[302px] w-[452px] rounded-t-xl" />
            </div>
            <div className="flex flex-col justify-center items-center w-full bg-[#FDF7F4] font-semibold p-[32px]">
            <PawRaised />
            </div>
            <div className="flex flex-col gap-[16px] m-[32px]">
                <h5 className="text-[26px] font-[Montserrat]">{items.title}</h5>
                <p className="text-[18px] text-[#696F8C]">{items.description}</p>
                <div className="flex flex-row">
                    <button type="button" className="text-[14px] text-[#8B4513]">VIEW DETAILS</button>
                    <img src="/public/arrow.png" />
                </div>
            </div>

        </div>
    )
}
export default PawCards