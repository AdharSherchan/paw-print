const Card = ({items, index}) => {
    console.log('Trial', items)
    return(
        <div
                key={index}
                className=" xl:w-[350px] w-64 flex flex-col justify-center p-4 gap-y-2 hover:bg-orange-300 hover:text-amber-800 hover:scale-95 transition-all duration-300 shadow-lg rounded-lg"
              >
                <img
                  className="object-cover xl:h-[240px] h-52 rounded-lg"
                  src={items.strCategoryThumb}
                />
                <h1 className="text-left font-bold">{items.strCategory}</h1>
                <p className="text-left h-20 overflow-auto">
                  {items.strCategoryDescription}
                </p>
              </div>
    )
}
export default Card