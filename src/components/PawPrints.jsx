import FirstContent from "./FirstContent"
import PawNavbar from "./PawNavbar"
import SecondContent from "./SecondContent"
import Font from "react-font"
import ThirdContent from "./ThirdContent"
import FourthContent from "./FourthContent"
import FifthContent from "./FifthContent"
import SixthContent from "./SixthContent"
import SeventhContent from "./SeventhContent"

const PawPrints = () => {
    return(
        <div className="h-screen w-screen bg-white">
            <div className="flex flex-col xl:gap-[109px] gap-[50px] bg-[#93CEAA]">   
                    <PawNavbar />     
                    <FirstContent />
            </div>
                <SecondContent />
                <ThirdContent />
                <FourthContent />
                <FifthContent />
                <SixthContent />
                <SeventhContent /> 


        </div>
    )
}
export default PawPrints