import StartContent from "./hero/StartContent";
import SecondContent from "./about_shelter/SecondContent";
import ThirdContent from "./donation_cards/ThirdContent";
import FourthContent from "./donation/FourthContent";
import FifthContent from "./event_schedule/FifthContent";
import SixthContent from "./volunteer/SixthContent";
import SeventhContent from "./get_involved/SeventhContent";
import PawFooter from "./PawFooter";
import Navigation from "./Navigation";
import { useEffect } from "react";

const PawPrints = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      document.body.style.display = 'none';
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
