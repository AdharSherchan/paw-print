import { useEffect } from "react";
import { useState } from "react";
import CoffeeCards from "./CoffeeCards";

const CoffeeCarousel = () => {
  const [display, setDisplay] = useState([]);
  const [show, setShow] = useState(0);
  const fetchCoffee = async () => {
    const response = await fetch(`https://api.sampleapis.com/coffee/hot`);
    const items = await response.json();
    setDisplay(items);
    console.log("Items", items);
  };
  const next = () => {
    setShow((prev) => (prev === display.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
        next();
    }, 3000);
    return () => clearInterval(interval)
  }, []);
  useEffect(() => {
    fetchCoffee();
  }, []);

  console.log("Display Araay", display);

  useEffect(() => {
    console.log("Show Value", show);
  }, [show]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/public/coffee.jpg')] lg:bg-contain bg-cover ">
      <div className="flex justify-center items-center h-[100%] w-[100%] backdrop-blur-sm m-5">
        <div className="flex flex-col items-center justify-center h-[90%] w-[90%] bg-stone-200/40 rounded-xl m-5">
          <div className="flex justify-center items-center h-[10%] w-[90%] m-5 ">
            <h1 className="font-bold font-serif text-amber-950 md:text-4xl text-xl">
              COFFEE AND CONVERSATION by AD
            </h1>
          </div>

          <div className="flex justify-center items-center h-[70%] w-[90%] gap-2 m-5">
            <button
              onClick={() =>
                setShow((prev) => (prev <= 0 ? display.length - 1 : prev - 1))
              }
            >
              {" "}
              Click Here
            </button>

            {display.length && <CoffeeCards items={display[show]} />}

            <button onClick={() => next}> Click Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoffeeCarousel;
