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
    console.log("IN Items", items);
  }
  const Compare = () => {
    const output = display.filter(
      (items) => items.name.toUpperCase().includes(value.toUpperCase())
    )
    if (value === '') {
      setSearchDisplay(display)
    } else {
      setSearchDisplay(output)
    }
    console.log("Output of Search bar", output)
  }
  
  useEffect(() => {
    fetchCountries();
  }, []);
  useEffect(() => {
    Compare()
  }, [value, display])
  console.log("IN Display", display);
  console.log("drop", drop)
  console.log("value of SB", value)
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" h-[500px] w-[70%] border border-black">
        <div className="h-10 w-full border border-black">
          <form className=" flex justify-between h-full w-full">
            <input
              type="text"
              placeholder=" Search Country Name..."
              name="search"
              className="h-full w-[95%]"
              onChange={(e) => setValue(e.target.value)}
            />
            <button
            type="button"
              onClick={() => setDrop((prev) => !prev)}
              className="h-full w-[5%] border border-black"
            >
              <CiSearch className="size-8" />
            </button>
          </form>
        </div>

        <div className=" h-[460px] w-full overflow-auto">
            
          {drop && display.length && (
            display?.map((items, index) => (
              <DropDownContent key={index} items={items} index={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default DropDown;
