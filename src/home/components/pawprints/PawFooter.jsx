import {
  Copyright
} from "../../contstant/data";
import NewsLetter from "./BottomPage/NewsLetter";
import Links from "./BottomPage/Links";

const PawFooter = () => {
  const CopyrightItem = ({ link }) => {
    return <p className="xl:text-[16px] text-[14px]">{link}</p>;
  };

  return (
    <div
      id="Contact"
      className="flex flex-col justify-center items-center mt-10 xl:mt-[100px] xl:px-[250px] px-10 xl:gap-0 gap-[4px] bg-white work-sans"
    >
      <NewsLetter />
      <div className="flex flex-col w-full xl:gap-[26px] ">
        <Links />
        <hr className="h-[2px] bg-slate-400" />
        <div className="flex xl:flex-row flex-col xl:items-center items-start justify-between pb-[32px] pt-3 gap-2">
          <div>Copyright © 2024 fourpaws. All Rights Reserved</div>
          <div className="flex xl:flex-row flex-col xl:gap-[40px] gap-1 ">
            {Copyright.map((item, index) => (
              <CopyrightItem key={index} link={item.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PawFooter;
