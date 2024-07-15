import { CiSearch } from "react-icons/ci";
import DropDownContent from "./DropDownContent";
import { useState } from "react";
import { useEffect } from "react";

const DropDown = () => {
  const [display, setDisplay] = useState([]);
  const [drop, setDrop] = useState(false);
  const [value, setValue] = useState('')
  const [searchDisplay, setSearchDisplay] = useState(display)
  const fetchCountries = async () => {
    const response = await fetch(
      `https://api.sampleapis.com/countries/countries`
    );
    const items = await response.json();
    setDisplay(items);
  }
  const Compare = () => {
    const output = display.filter(
      (items) => items.name.toUpperCase().includes(value.toUpperCase())
    )
    if (value === "") {
      setSearchDisplay(display)
    } else {
      setSearchDisplay(output)
    }
    console.log("Output of Search bar", output)
    console.log("Search Display inside Compare", searchDisplay)
  }
  
  useEffect(() => {
    fetchCountries();
  }, []);
  useEffect(() => {
    Compare()
  }, [value, display])
  
  console.log("value of SB", value)

  return (
    <div className="flex items-center justify-center lg:h-screen min-h-screen w-screen bg-[url('/public/globe.jpg')] bg-fill relative">
      <div className=" flex items-center justify-center h-full w-full bg-black/40 absolute">
      <div className=" h-[500px] xl:w-[45%] w-[70%]">
        <div className="h-10 border border-black  bg-black/40 rounded-2xl">
          <form className=" flex justify-between h-full w-full">
            <input
              type="text"
              placeholder=" Search Country Name..."
              name="search"
              className="h-full xl:w-[95%] w-[90%] rounded-2xl  text-slate-300 bg-black/40"
              onChange={(e) => setValue(e.target.value)}
            />
            <button
            type="button"
              onClick={() => setDrop((prev) => !prev)}
              className="h-full xl:w-[5%] w-[10%] rounded-full  "
            >
              <CiSearch className="size-8" />
            </button>
          </form>
        </div>

        <div className=" h-[460px] w-full overflow-auto">
            
          {drop && display.length && (
            searchDisplay?.map((items, index) => (
              <DropDownContent key={index} items={items} index={index} />
            ))
          )}
        </div>
      </div>
      </div>
    </div>
  );
};
export default DropDown;
