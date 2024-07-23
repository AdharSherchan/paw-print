import FirstContent from "./hero/FirstContent";
import StartContent from "./hero/StartContent"
import SecondContent from "./about_shelter/SecondContent";
import ThirdContent from "./donation_cards/ThirdContent";
import FourthContent from "./donation/FourthContent";
import FifthContent from "./event_schedule/FifthContent";
import SixthContent from "./volunteer/SixthContent";
import SeventhContent from "./get_involved/SeventhContent";
import PawFooter from "./PawFooter";
import PawNavbar from "./PawNavbar";
import Font, {Text} from "react-font";
import Navigation from "./Navigation";
;



const PawPrints = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navigation />
      <StartContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <FifthContent />
      <SixthContent />
      <SeventhContent />
      <PawFooter />
    </div>
  );
};
export default PawPrints;
