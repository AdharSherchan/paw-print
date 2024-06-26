import { useEffect } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function SearchBar(){
    const foodItems = [
        {name : 'Chicken Keema'}, {name: 'Maida Flour'}, {name: 'Onions'}, {name: 'Garlic and ginger paste'}, {name: 'Oil'}
    ]
    const [value, setValue] = useState('')
    const [result, setResult] = useState(foodItems)
    function Compare(){
        const output = result.filter((foods) => foods.name.toUpperCase().includes(value.toUpperCase()))
        setResult(output)
    }
    useEffect(() => {
        Compare()
    }, [value])
    console.log(result)
    return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <div className="flex flex-col gap-y-10 items-center p-12 w-[700px] h-[400px] border-2 border-double border-black">
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="font-bold text-4xl w-1/2 font-serif" >AD's Shopping List for Momo party</h1>
                <form className="flex border border-black bg-clip-padding p-2 bg-gray-600 items-center">
                    <input type="text" placeholder=" Search..." name="search" onChange={(e) => setValue(e.target.value)} className="border border-grey text-indigo-900"/>
                    <button type="submit"><CiSearch className="text-white size-5 m-1" /></button>
                </form>
            </div>
            <div className=" w-full">
                <ol className="list-item font-['Roboto'] text-lg">
                    {result.map((foods) => (
                        <li key={foods.name} className=" hover:text-blue-400 transition duration-300"> {foods.name} </li>
                    ))}
                </ol>
            </div>
        </div>
    </div>
    )
}

export default SearchBar