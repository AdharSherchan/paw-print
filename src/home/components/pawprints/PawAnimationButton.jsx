const PawAnimationButton = () => {
    return(
        <div className="flex flex-col items-center justify-center gap-20 m-20">
            <div className="flex flex-row gap-20">
            <button className=" flex group items-end justify-start bg-amber-700 h-20 w-36 overflow-hidden">
                <div className="h-5 w-5 -bottom-2 rounded-full bg-green-200 group-hover:bg-yellow-200 group-hover:scale-[50] ease-in-out duration-1000"></div>
            </button>
            <button className=" flex group items-end justify-start bg-amber-700 h-20 w-36 overflow-hidden">
                <div className="h-full w-1  bg-none group-hover:bg-yellow-200 group-hover:scale-x-[100] ease-in-out duration-1000"></div>
            </button>
            </div>
            <div>
                <div className="flex items-center justify-center h-[8px] w-[815px] bg-[#E6E6E6] rounded-lg">
                    
                    
                    <div className="flex items-center w-full h-[8px] border border-pink-600 rounded-lg">
                    <div className=" h-[26px] w-[42px] bg-[#8B4513] rounded-sm">

                    </div>

                    </div>
                    
                </div>

            </div>
            

        </div>
        
    )
}
export default PawAnimationButton