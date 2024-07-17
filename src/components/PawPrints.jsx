import FirstContent from "./FirstContent";
import PawNavbar from "./PawNavbar";
import SecondContent from "./SecondContent";
import Font from "react-font";
import ThirdContent from "./ThirdContent";
import FourthContent from "./FourthContent";
import FifthContent from "./FifthContent";
import SixthContent from "./SixthContent";
import SeventhContent from "./SeventhContent";
import PawFooter from "./PawFooter";
import StartContent from "./StartContent";

const PawPrints = () => {
  return (
    <div className="h-screen w-screen   overflow-y-scroll ">
      <PawNavbar />
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
