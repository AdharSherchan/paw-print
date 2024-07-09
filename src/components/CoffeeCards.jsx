const CoffeeCards = ({ items }) => {
  console.log("items in card", items);
  return (
    
      <div className="flex flex-col items-center justify-center lg:h-[450px] h-[300px] lg:w-[350px] w-[200px] bg-slate-300/50 rounded-xl p-3 gap-1">
        <img
          className="object-cover lg:h-[300px] h-[200px] w-[95%] rounded-2xl"
          src={items.image}
        />
        <p className="w-[95%] lg:h-[50px] h-[30px] font-bold text-amber-950 font-serif text-center">
          {items.title}
        </p>
        <p className="w-[95%] lg:h-[150px] h-[80px] text-amber-950 font-sans font-semibold ">{items.ingredients}</p>
      </div>

  );
};
export default CoffeeCards;
