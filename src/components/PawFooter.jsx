import { BsTwitterX } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import PawButton from "./PawButton";

const PawFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[112px] px-[250px] bg-white ">
      <div className="flex flex-row w-screen items-center justify-between bg-[#93CEAA] px-[250px] py-[25px]">
        <div className="flex flex-col">
          <p className="text-[20px] font-semibold">Join our newsletter</p>
          <p className="text-[16px]">Pawprint that has been for pets.</p>
        </div>
        <div>
          <form className="flex flex-row gap-[8px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-[20px] py-[10px] rounded-lg"
            />
            <PawButton text="Subscribe" className={"!px-[20px] !py-[10px]"} />
          </form>
        </div>
      </div>
      <div className="flex flex-col w-full gap-[32px]">
        <div className="flex flex-col my-[48px] gap-[56px] ">
            <p className="text-[20px] font-serif font-semibold">PawPrints</p>
            <div className="flex flex-row  gap-[32px] justify-between ">
                <div className="flex flex-col gap-[20px]">
                    <div>
                        <p className="text-[18px]">QUICK LINKS</p>
                    </div>
                    <div>
                        <p className="text-[16px]">About Us</p>
                        <p className="text-[16px]">Get Involved</p>
                        <p className="text-[16px]">Contact Us</p>
                        <p className="text-[16px]">Media</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div>
                        <p className="text-[18px]">RESOURCES</p>
                    </div>
                    <div>
                        <p className="text-[16px]">Animal Safety</p>
                        <p className="text-[16px]">Programs</p>
                        <p className="text-[16px]">Events</p>
                        <p className="text-[16px]">Alumni</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div>
                        <p className="text-[18px]">WAYS TO GIVE</p>
                    </div>
                    <div>
                        <p className="text-[16px]">Find a Family</p>
                        <p className="text-[16px]">Donation</p>
                        <p className="text-[16px]">Volunteer</p>
                        <p className="text-[16px]">Give a Gift</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] w-[330px]">
                    <div>
                        <p className="text-[18px]">SOCIAL MEDIA</p>
                    </div>
                    <p className="text-[16px]">Follow us on social media to find out the latest updates on our progress.</p>
                    <div className="flex flex-tow gap-[8px]">
                        <BsTwitterX />
                        <ImFacebook />
                        <PiInstagramLogoFill />

                    </div>
                </div>
            </div>
        
        </div>
        <hr className="border border-slate-800" />
        <div className="flex flex-row items-center justify-between pb-[32px]">
            <div>Copyright © 2024 fourpaws. All Rights Reserved</div>
            <div className="flex flex-row gap-[40px]">
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
