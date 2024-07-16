import PawButton from "./PawButton";
import PawCards from "./PawCards";

const ThirdContent = () => {
  const CardArray = [{img: "/public/Rectangle 5.png", title: 'New chance for animals', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {img: "/public/cat.png", title: 'Help the eco system', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {img: "/public/dog.png", title: 'New Sustainability', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
]
  return (
    <div className="flex flex-col bg-[#FDF7F4] px-[250px] py-[112px] gap-[56px]">
      <div className="flex flex-col items-center justify-center gap-[12px]">
        <p className="text-[14px] text-[#8B4513]">A HELP TO THOSE WHO NEED IT</p>
        <h2 className="text-[42px] font-[Montserrat]">Each donation is an essential</h2>
        <p className="text-[18px] text-[#696F8C] w-[936px] text-wrap text-center">We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>

      </div>
      <div className="flex flex-row gap-[32px]">
        {CardArray.map((items, index) => <PawCards key={index} items={items} index={index} />)}
        </div>
      <div>
        <PawButton />
      </div>
    </div>
  );
};
export default ThirdContent;
