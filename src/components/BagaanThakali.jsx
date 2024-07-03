import { useEffect } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Shimmer from "./Shimmer";
import Card from "./Card";

function BagaanThakali() {
  const [value, setValue] = useState("");
  const [foodDisplay, setFoodDisplay] = useState([]);
  const [display, setDisplay] = useState(foodDisplay);
  const [loading, setLoading] = useState(true);
  const [itemnumber, setItemNumber] = useState(4)
  const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8];
  function Compare() {
    const output = foodDisplay.filter(
      (items) =>
        items.strCategory.toUpperCase().includes(value.toUpperCase()) ||
        items.strCategoryDescription.toUpperCase().includes(value.toUpperCase())
    );
    if (value === "") {
      setDisplay(foodDisplay);
    } else {
      setDisplay(output);
    }
    console.log("Value of output:", output);
  }
  console.log(loading);
  const fetchFoodItems = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php/"
    );
    const items = await response.json();
    setFoodDisplay(items.categories);
    setLoading(false);
  };
  useEffect(() => {
    fetchFoodItems();
  }, []);
  useEffect(() => {
    Compare();
  }, [value, foodDisplay]);
  return (
    <div className="flex justify-center items-center min-h-screen w-screen overflow-auto xl:py-20 py-10 bg-gradient-to-r from-orange-500 via-orange-300 to-amber-700 S">
      <div className="flex flex-col xl:h-fit xl:w-[1500px] h-full w-[85%] bg-white">
        <div className="flex flex-row flex-wrap lg:justify-between justify-center items-center px-2">
          <div className="flex flex-row lg:justify-between justify-center items-center lg:w-[70%] xl:w-[1150px]">
            <img
              src="/logo.png"
              alt=" Bagaan Thakali Logo"
              className="lg:w-[200px] w-32 lg:h-full h-32 "
            />
            <h1 className="h-fit text-5xl xl:text-9xl text-justify font-serif">
              Bagaan Thakali
            </h1>
          </div>
          <form className="flex flex-row justify-center items-center xl:w-[300px] w:56 h-full shadow shadow-slate-500">
            <input
              type="text"
              placeholder=" Search Menu Item...."
              name="Search"
              onChange={(e) => setValue(e.target.value)}
              className="xl:w-[250px] w-44 xl:h-[50px] h-9 border border-black "
            />
            <button
              type="submit"
              className="xl:h-[50px] h-9 xl:w-[45px] w-9 border border-black"
            >
              <CiSearch className="xl:size-12 size-8" />{" "}
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center xl:h-[100px] h-16 w-full">
          <h1 className="h-fit xl:text-5xl text-xl font-serif text-center">
            Best Selling at Bagaan Thakali
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-4 w-full xl:px-5 xl:pb-10 p-5 xl:justify-start justify-center items-center">
          {loading === true ? (
            <div className="flex flex-row flex-wrap gap-4 w-full xl:px-5 xl:pb-10 p-5 xl:justify-start justify-center items-center">
              {shimmerArray.map((blocks, index) => (
                <Shimmer key={index} />
              ))}
            </div>
          ) : (
              display.map((items, index) => <Card key={index} items={items} index={index} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default BagaanThakali;



