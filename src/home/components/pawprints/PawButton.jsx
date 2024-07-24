const PawButton = ({children, className, ...props}) => {
    return(
        
              <button {...props} className={`${className} flex flex-row xl:px-[40px] px-[24px] xl:py-[12px] py-[8px] bg-[#8B4513] hover:text-[#8B4513] 
               text-white rounded-lg xl:text-[18px] text-[14px] hover:scale-105 transition-all duration-1000  group relative `}> 
               <div className="h-full w-0 group-hover:w-full top-0 left-0 bg-[#FBEFE9]  ease-in-out duration-1000 absolute -z-10 rounded-lg "></div>
              {children}
                </button>
            
    )
}
export default PawButton