import { useEffect } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function BagaanThakali() {
  const foodItems = [
    {
      img: "/bagaan.jpg",
      name: "Asala Maccha Sukuti",
      description:
        "Adhar Sherchan.",
      price: "750 only/-",
    },
    {
      img: "/bagaan.jpg",
      name: "Chyangra Sukuti",
      description:
        "Asala Maccha Sukuti is the fresh river water fish caught from the river of Burtibang village, in Baglung District. It comes in a dried form, and served as a gravy.",
      price: "759 only/-",
    },
    {
      img: "/bagaan.jpg",
      name: "Mutton Sukuti",
      description:
        "Asala Maccha Sukuti is the fresh river water fish caught from the river of Burtibang village, in Baglung District. It comes in a dried form, and served as a gravy.",
      price: "700 only/-",
    },
    {
      img: "/bagaan.jpg",
      name: "Mutton Sukuti",
      description:
        "Asala Maccha Sukuti is the fresh river water fish caught from the river of Burtibang village, in Baglung District. It comes in a dried form, and served as a gravy.",
      price: "700 only/-",
    },
  ];
  const [value, setValue] = useState('')
  const [display, setDisplay] = useState(foodItems)
  console.log('AD', value)
  function Compare(){
    const output = foodItems.filter((foods) => (foods.name.toUpperCase().includes(value.toUpperCase())) || (foods.description.toUpperCase().includes(value.toUpperCase())) || (foods.price.includes(value)))
    if (value === '') {
      setDisplay(foodItems)
    }
    else{
      setDisplay(output)
    }
    console.log('Output:', output)
  }
  useEffect(() => {
    Compare()
  }, [value])
  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-r from-orange-500 via-orange-300 to-amber-700 S">
      <div className="flex flex-col xl:h-[800px] xl:w-[1500px] h-full w-[85%] bg-white">
        <div className="flex flex-row flex-wrap lg:justify-between justify-center items-center px-2">
          <div className="flex flex-row lg:justify-between justify-center items-center lg:w-[70%] xl:w-[1150px] border border-blue-500">
            <img
              src="/logo.png"
              alt=" Bagaan Thakali Logo"
              className="lg:w-[200px] w-32 lg:h-full h-32 border border-blue-500"
            />
            <h1 className="h-fit text-5xl xl:text-9xl text-justify font-serif border border-blue-500">
              Bagaan Thakali
            </h1>
          </div>
          <form className="flex flex-row justify-center items-center xl:w-[300px] w:56 h-full border border-blue-500 shadow shadow-slate-500">
            <input
              type="text"
              placeholder=" Search Menu Item...."
              name="Search"
              onChange={(e)=> setValue(e.target.value)} 
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
        <div className="flex flex-row flex-wrap gap-4 w-full xl:justify-start justify-center items-center">
          {display.map((foods, index) => (
            <div
              key={index}
              className=" xl:w-[350px] w-64 flex flex-col justify-center p-4 gap-y-2 hover:bg-orange-300 hover:text-amber-800 hover:scale-95 transition-all duration-300 shadow-lg rounded-lg"
            >
              <img
                className="object-cover xl:h-[240px] h-52 rounded-lg"
                src={foods.img}
              />
              <h1 className="text-left font-bold">{foods.name}</h1>
              <p className="text-left hidden xl:block h-20 overflow-auto">{foods.description}</p>
              <p className="text-left font-medium text-green-800 ">
                Rs. {foods.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BagaanThakali;
