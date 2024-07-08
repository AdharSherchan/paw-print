import { useEffect } from "react"
import { useState } from "react"
import CoffeeCards from "./CoffeeCards"

const CoffeeCarousel = () => {
    const [display, setDisplay] = useState([])
    const fetchCoffee = async() => {
        const response = await fetch (`https://api.sampleapis.com/coffee/hot`)
        const items = await response.json()
        setDisplay(items)
    }
    useEffect(() => {
        fetchCoffee()
    }, [])
    console.log('Display Araay', display)

    return(
        <div className="flex items-center justify-center h-screen bg-[url('/public/coffee.jpg')] lg:bg-contain bg-cover ">
            <div className="flex justify-center items-center h-[100%] w-[100%] backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center h-[90%] w-[90%] gap-10 bg-stone-200">
                    <div className="flex justify-center items-center h-[10%] w-[90%] bg-pink-200">
                        <h1 className="font-bold font-serif md:text-3xl text-xl">
                            COFFEE AND CONVERSATION by AD
                        </h1>

                    </div>
                    <div className=" h-[70%] w-[90%] bg-yellow-200">
                        {display.map((items, index) => (
                            <CoffeeCards key={index} items={items} index={index} />
                        ))}
                    </div>

                </div>
            </div>
            
        </div>
    )
}
export default CoffeeCarousel