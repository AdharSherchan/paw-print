import { BsTwitterX } from "react-icons/bs";
import { QuickLinks, Resources, WaysToGive } from "../../../contstant/data";
import { ImFacebook } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";

const Links = () => {
    const QuickLinkItem = ({ link }) => {
        return <p className="xl:text-[16px] text-[14px]">{link}</p>;
      };
      const ResourcesItem = ({ link }) => {
        return <p className="xl:text-[16px] text-[14px]">{link}</p>;
      };
      const WaysToGiveItem = ({ link }) => {
        return <p className="xl:text-[16px] text-[14px]">{link}</p>;
      };

  return (
    <div className="flex flex-col xl:my-[48px] my-4 xl:gap-[30px] gap-3">
      <p className="text-[24px] font-serif font-semibold oleo-script xl:leading-[36px]">
        Pawprints
      </p>
      <div className="flex flex-row flex-wrap  xl:gap-[32px] gap-5 justify-between ">
        <div className="flex flex-col xl:gap-[20px]  gap-2 xl:text-left text-center">
          <p className="xl:text-[18px] text-[16px] montserrat">QUICK LINKS</p>
          <div className="flex flex-col xl:gap-[12px] gap-1">
            {QuickLinks.map((item, index) => (
              <QuickLinkItem key={index} link={item.link} />
            ))}
          </div>
        </div>
        <div className="flex flex-col xl:gap-[20px]  gap-2 xl:text-left text-center">
          <p className="xl:text-[18px] text-[16px] montserrat">RESOURCES</p>
          <div className="flex flex-col xl:gap-[12px] gap-1">
            {Resources.map((item, index) => (
              <ResourcesItem key={index} link={item.link} />
            ))}
          </div>
        </div>
        <div className="flex flex-col xl:gap-[20px]  gap-2 xl:text-left text-center">
          <p className="xl:text-[18px] text-[16px] montserrat">WAYS TO GIVE</p>
          <div className="flex flex-col xl:gap-[12px] gap-1">
            {WaysToGive.map((item, index) => (
              <WaysToGiveItem key={index} link={item.link} />
            ))}
          </div>
        </div>
        <div className="flex flex-col xl:gap-[20px] gap-2 w-[330px]">
          <p className="xl:text-[18px] text-[16px] montserrat">SOCIAL MEDIA</p>
          <p className="xl:text-[16px] text-[14px]">
            Follow us on social media to find out the latest updates on our
            progress.
          </p>
          <div className="flex flex-tow gap-[8px]">
            <BsTwitterX />
            <ImFacebook />
            <PiInstagramLogoFill />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Links;
