import FirstContent from "./FirstContent"
import PawNavbar from "./PawNavbar"

const StartContent = () => {
    return(
        <div className="flex flex-col bg-[#93CEAA] border-8 border-orange-500">
        <div className="flex flex-row items-center xl:ml-[85px] m-5 ">
            <div className="xl:flex flex-col items-center  gap-[16px] hidden">
            <img src="/public/Frame 7.png" />
            <img src="/public/Frame 8.png" />
            </div>
            <FirstContent />
        </div>
    
      </div>
    )
}
export default StartContent