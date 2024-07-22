import { BsTwitterX } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import PawButton from "./PawButton";

const PawFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:mt-[112px] mt-10 xl:px-[250px] px-10 bg-white ">
      <div className="flex xl:flex-row flex-col w-screen xl:items-center justify-between gap-5 bg-[#93CEAA] xl:px-[250px] xl:my-[25px] p-5 ">
        <div className="flex flex-col">
          <p className="text-[20px] font-semibold">Join our newsletter</p>
          <p className="text-[16px]">Pawprint that has been for pets.</p>
        </div>
        <div >
          <form className="flex flex-row  gap-[8px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-[20px] xl:py-[10px] py-[5px] rounded-lg"
            />
            <PawButton text="Subscribe" className={"!px-[20px] !py-[10px]"} />
          </form>
        </div>
      </div>
      <div className="flex flex-col w-full xl:gap-[32px] ">
        <div className="flex flex-col xl:my-[48px] my-4 xl:gap-[56px] gap-3">
            <p className="text-[20px] font-serif font-semibold">PawPrints</p>
            <div className="flex flex-row flex-wrap  xl:gap-[32px] gap-5 justify-between ">
                <div className="flex flex-col xl:gap-[20px] gap-1 xl:text-left text-center">
                    <div>
                        <p className="xl:text-[18px] text-[16px]">QUICK LINKS</p>
                    </div>
                    <div>
                        <p className="xl:text-[16px] text-[14px]">About Us</p>
                        <p className="xl:text-[16px] text-[14px]">Get Involved</p>
                        <p className="xl:text-[16px] text-[14px]">Contact Us</p>
                        <p className="xl:text-[16px] text-[14px]">Media</p>
                    </div>
                </div>
                <div className="flex flex-col xl:gap-[20px] gap-1 xl:text-left text-center">
                    <div>
                        <p className="xl:text-[18px] text-[16px]">RESOURCES</p>
                    </div>
                    <div>
                        <p className="xl:text-[16px] text-[14px]">Animal Safety</p>
                        <p className="xl:text-[16px] text-[14px]">Programs</p>
                        <p className="xl:text-[16px] text-[14px]">Events</p>
                        <p className="xl:text-[16px] text-[14px]">Alumni</p>
                    </div>
                </div>
                <div className="flex flex-col xl:gap-[20px] gap-1 xl:text-left text-center">
                    <div>
                        <p className="xl:text-[18px] text-[16px]">WAYS TO GIVE</p>
                    </div>
                    <div>
                        <p className="xl:text-[16px] text-[14px]">Find a Family</p>
                        <p className="xl:text-[16px] text-[14px]">Donation</p>
                        <p className="xl:text-[16px] text-[14px]">Volunteer</p>
                        <p className="xl:text-[16px] text-[14px]">Give a Gift</p>
                    </div>
                </div>
                <div className="flex flex-col xl:gap-[20px] gap-2 w-[330px]">
                    <div>
                        <p className="xl:text-[18px] text-[16px]">SOCIAL MEDIA</p>
                    </div>
                    <p className="xl:text-[16px] text-[14px]">Follow us on social media to find out the latest updates on our progress.</p>
                    <div className="flex flex-tow gap-[8px]">
                        <BsTwitterX />
                        <ImFacebook />
                        <PiInstagramLogoFill />

                    </div>
                </div>
            </div>
        
        </div>
        <hr className="h-[2px] bg-slate-400" />
        <div className="flex xl:flex-row flex-col xl:items-center items-start justify-between pb-[32px] pt-3">
            <div className="">Copyright © 2024 fourpaws. All Rights Reserved</div>
            <div className="flex xl:flex-row flex-col xl:gap-[40px] gap-2 ">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Security</p>
                <p>Sitemap</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default PawFooter;
