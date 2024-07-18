const PawButton = ({text, className}) => {
    return(
        <div className="flex ">
              <p className={`${className} xl:px-[40px] px-[24px] xl:py-[12px] py-[8px] bg-[#8B4513] text-white rounded-lg xl:text-[18px] text-[14px] `}> {text}
              </p>
            </div>
    )
}
export default PawButton