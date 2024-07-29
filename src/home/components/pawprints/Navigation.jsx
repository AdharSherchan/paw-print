import { useState } from "react"
import {GiHamburgerMenu } from "react-icons/gi"
import PawResponsiveNav from "./PawResponsiveNav"
import PawNavbar from "./PawNavbar"

const Navigation = () => {
    const [hamClick, setHamClick] = useState(false)
    return(
        <div>
            <div  className="flex w-full z-50 items-end justify-end fixed">
                <button type="button" className="xl:hidden flex  h-10 bg-white " onClick={() => setHamClick(true)}>
                    <GiHamburgerMenu className="m-auto object-contain h-6 w-10" />
                </button>
            </div>
            
            {hamClick && (
                <PawResponsiveNav setHamClick={setHamClick} />
            )}
            <PawNavbar />
        </div>
    )
}
export default Navigation