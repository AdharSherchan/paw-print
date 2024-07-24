import FirstContent from "./FirstContent"
import PawNavbar from "../PawNavbar"

const StartContent = () => {
    return(
        <div id="Pawprint" className="flex flex-col bg-[#93CEAA] ">
        <div className="flex flex-row max-w-full items-center justify-center ">
            <div className="xl:flex flex-col items-center xl:ml-[85px] gap-[16px] hidden">
            <img src="/public/Frame 7.png" />
            <img src="/public/Frame 8.png" />
            </div>
            <FirstContent />
        </div>
    
      </div>
    )
}
export default StartContent