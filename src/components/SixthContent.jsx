const SixthContent = () => {
    return(
        <div className="flex flex-col items-center justify-center px-[250px] py-[112px] gap-[56px]">
            <div className="flex flex-col justify-center items-center gap-[12px]">
                <p className="text-[14px] text-[#8B4513]">TESTIMONIALS</p>
                <h2 className="text-[42px]">Check what our volunteers are saying</h2>
                <p className="text-[18px] text-[#696F8C] w-[900px] text-center">We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
            </div>
            <div className="flex flex-row gap-[132px]">
                <div>
                    <img src="/public/Volunteer.png"  />
                </div>
                <div className="flex flex-col my-[87px] w-[815px] gap-[32px]">
                    <img src="/public/quote.png" className="w-[72px] h-[72px]"/>
                    <p className="text-[24px]">Volunteering with fourpaws is incredibly fulfilling. Seeing rescued animals thrive is rewarding beyond words. The dedication of the team inspires me daily, and this experience has enriched my life in countless, meaningful ways.</p>
                    <p className="text-[18px]">Gal G.</p>
                    <div className="flex flex-row gap-[16px]">
                        <img src="/public/Frame 66.png" className="h-[52px] w-[52px]" />
                        <img src="/public/arrowright.png" className="h-[52px] w-[52px]"  />
                        
                    </div>
                </div>

            </div>

        </div>
    )
}
export default SixthContent