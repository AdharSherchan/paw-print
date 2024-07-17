const SeventhContent = () => {
    return(
        <div className="bg-white mb-[52px]">
            <div className="flex flex-row items-center justify-center mx-[250px] gap-[24px] rounded-lg relative bg-[#8B4513] overflow-hidden">
            <div className="flex flex-col">
                <div className="rounded-full h-[420px] w-[420px] border-[56px] border-[#A8D5BA] absolute -top-48 -left-48 "> </div>
                <img src="public/golden.png" className="h-[220px] w-[250px] absolute bottom-0 left-2 "  />
            </div>
            <div className="flex flex-col w-[850px] items-center justify-center py-[56px] gap-[24px] text-white ">
                <h2 className="text-[42px] font-bold">Get Involved</h2>
                <p className="text-[18px] text-center ">Our work is made possible by the generosity of people like you, who have contributed to our mission to improve the lives of all animals.</p>
                <div className="flex flex-row gap-[16px]">
                    <button type="button" className="px-[40px] py-[16px] text-[#8B4513] bg-white rounded-lg"> Adopt & Donate to help us</button>
                    <button type="button" className="px-[40px] py-[16px]  text-[#8B4513] bg-white rounded-lg"> Volunteering opportunities</button>
                </div>
            </div>
            <div>
                <div className="rounded-full h-[420px] w-[420px] border-[56px] border-[#A8D5BA] absolute -bottom-52 -right-52 "> </div>
                <img src="public/animal-shelter-img-5 1.png" className="h-[220px] w-[180px] object-contain absolute bottom-0 right-2 "  />
            </div>

        </div>

        </div>
        
    )    
}
export default SeventhContent