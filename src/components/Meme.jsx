import { useEffect } from "react";
import { useState } from "react";
import MemeShimmer from "./MemeShimmer";
import MemeCard from "./MemeCard";
import Navbar from "./Navbar";
import ResponsiveNav from "./ReponsiveNav";
import { GiHamburgerMenu } from "react-icons/gi";

const Meme = () => {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hamClick, setHamClick] = useState(false)
  const [loadItems, setLoadItems] = useState(8);
  const fetchMemes = async () => {
    const response = await fetch(`https://meme-api.com/gimme/${loadItems}`);
    const items = await response.json();
    setDisplay(items.memes);
    setLoading(false);
  };
  const handleScroll = () => {
    setLoadItems((previous) => previous + 8);
  };
  console.log("Items successfully ?", display);
  useEffect(() => {
    fetchMemes();
  }, [loadItems]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.scrollHeight
      ) {
        handleScroll();
      }
    });
    return window.removeEventListener("scroll", () => {
      handleScroll();
    });
  }, []);
  console.log("LoadItems:", loadItems);
  console.log(hamClick)
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center gap-y-5 p-10 bg-slate-800">
      <div className="flex items-center justify-center w-[80%] ">
        <div className="flex justify-end w-full border border-red-600">
          <button
            type="submit"
            className="text-white size-10 m-1 object-contain border lg:hidden border-green-700"
            onClick={() => setHamClick(true)}
          >
            <GiHamburgerMenu className="text-white size-5 m-1" />
          </button>
        </div>
        {hamClick && (
            <ResponsiveNav key={index} hamClick={hamClick} />
        )}
        {/* <h1 className="xl:text-6xl text-xl xl:mt-3 h-fit w-fit text-black font-bold font-serif "> HOUSE OF MEMES </h1> */}
        <Navbar />
      </div>
      <div className="flex flex-row flex-wrap col-span-5 mt-16 gap-3 h-fit  w-[80%] border border-yellow-500">
        {loading === true ? (
          <MemeShimmer />
        ) : (
          display.map((items, index) => (
            <MemeCard key={index} items={items} index={index} />
          ))
        )}
      </div>
    </div>
  );
};
export default Meme;
