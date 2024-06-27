import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function BagaanThakali() {
  const foodItems = [
    {
      img: "/bagaan.jpg",
      name: "Asala Maccha Sukuti",
      description:
        "Asala Maccha Sukuti is the fresh river water fish caught from the river of Burtibang village, in Baglung District. It comes in a dried form, and served as a gravy.",
      price: "700 only/-",
    },
    {
      img: "/bagaan.jpg",
      name: "Chyangra Sukuti",
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
    {
      img: "/bagaan.jpg",
      name: "Mutton Sukuti",
      description:
        "Asala Maccha Sukuti is the fresh river water fish caught from the river of Burtibang village, in Baglung District. It comes in a dried form, and served as a gravy.",
      price: "700 only/-",
    },
  ];
  const [display, setDisplay] = useState(foodItems);
  console.log(foodItems);
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-orange-500 via-orange-300 to-amber-700">
      <div className="flex flex-col xl:h-[800px] xl:w-[1500px] h-full w-[90%] bg-white">
        <div className="flex xl:flex-row flex-col justify-between items-center">
          <div className="flex flex-row justify-between items-center">
            <img
              src="/logo.png"
              alt=" Bagaan Thakali Logo"
              className="w-[200px] xl:h-full"
            />
            <h1 className="h-fit text-5xl xl:text-9xl text-justify ">
              Bagaan Thakali
            </h1>
          </div>
          <form className="flex flex-row justify-center items-center w-[300px] h-full ">
            <input
              type="text"
              placeholder="Search Menu Item...."
              name="Search"
              className="xl:w-[250px] xl:h-[50px] border border-black "
            />
            <button
              type="submit"
              className="h-[50px] w-[45px] border border-black"
            >
              <CiSearch className="size-12" />{" "}
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center xl:h-[100px] w-full">
          <h1 className="h-fit text-5xl text-center">
            Best Selling at Bagaan Thakali
          </h1>
        </div>
        <div className="flex xl:flex-row flex-col xl:justify-between w-full justify-center items-center">
          {display.map((foods, index) => (
            <div
              key={index}
              className=" w-[350px] flex flex-col justify-center p-4 gap-y-2 hover:scale-95 transition-all duration-300 shadow-lg"
            >
              <img
                className="object-cover h-[240px] rounded-lg"
                src={foods.img}
              />
              <h1 className="text-left font-bold">{foods.name}</h1>
              <p className="text-left">{foods.description}</p>
              <p className="text-left font-medium text-green-800">
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
