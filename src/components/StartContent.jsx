import FirstContent from "./FirstContent"
import PawNavbar from "./PawNavbar"

const StartContent = () => {
    return(
        <div className="flex flex-col  bg-[#93CEAA] border-8 border-orange-500">
        <div className="flex flex-row items-center ml-[85px]">
            <div className="flex flex-col items-center  gap-[16px] border border-green-600 ">
            <img src="/public/Frame 7.png" className="xl:block hidden" />
            <img src="/public/Frame 8.png" className="xl:block hidden" />
            </div>
            <FirstContent />
        </div>
    
      </div>
    )
}
export default StartContent