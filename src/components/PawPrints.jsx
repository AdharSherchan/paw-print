import FirstContent from "./FirstContent"
import PawNavbar from "./PawNavbar"
import SecondContent from "./SecondContent"

const PawPrints = () => {
    return(
        <div className="h-screen w-screen bg-white">
            <div className="flex flex-col xl:gap-[109px] gap-[50px] bg-[#93CEAA]">
                <div className="xl:flex items-center justify-center mt-[32px] hidden">
                    <PawNavbar />
                </div>
                <div className="">
                    <FirstContent />
                </div>

            </div>
            <div className="bg-white">
                <SecondContent />
            </div>

        </div>
    )
}
export default PawPrints