const PawButton = ({children, className, ...props}) => {
    return(
        
              <button {...props} className={`${className} flex flex-row xl:px-[40px] px-[24px] xl:py-[12px] py-[8px] bg-[#8B4513] text-white rounded-lg xl:text-[18px] text-[14px] hover:scale-105 transition-all duration-300`}> 
              {children}
                </button>
            
    )
}
export default PawButton