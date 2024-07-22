import PawButton from "../PawButton";
import PawCards from "../PawCards";

const ThirdContent = () => {
  const CardArray = [{img: "/public/Rectangle 5.png", title: 'New chance for animals', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {img: "/public/cat.png", title: 'Help the eco system', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {img: "/public/dog.png", title: 'New Sustainability', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
]
  return (
    <div className="flex flex-col bg-[#FDF7F4] w-full xl:px-[250px] xl:py-[112px] p-10 gap-[56px]">
      <div className="flex flex-col items-center justify-center xl:gap-[12px] gap-3">
        <p className="text-[14px] text-[#8B4513]">A HELP TO THOSE WHO NEED IT</p>
        <h2 className="xl:text-[42px] text-[22px] font-[Montserrat]">Each donation is an essential</h2>
        <p className="xl:text-[18px] text-[15px] text-[#696F8C] xl:w-[936px] w-fit text-wrap text-center">We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>

      </div>
      <div className="flex xl:flex-row flex-col items-center justify-center gap-[32px]">
        {CardArray.map((items, index) => <PawCards key={index} items={items} index={index} />)}
        </div>
      <div className="flex justify-center w-full ">
        <PawButton text=" View All Causes" />
      </div>
    </div>
  );
};
export default ThirdContent;