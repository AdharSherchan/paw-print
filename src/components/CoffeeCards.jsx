const CoffeeCards = ({items, index}) => {
    console.log ('items in card', items)
    return(
        <div className="flex h-screen items-center justify-center bg-blue-200"> 
            <div className="flex flex-col items-center justify-center h-[400px] w-[350px] bg-cyan-200">
            <img className="object-contain w-[95%] bg-red-200" src={items.image} />
            <p className="w-[95%] bg-lime-200 text-center">
                {items.title}
            </p>
            <p className="w-[95%] bg-orange-200">
            {items.ingredients}
            </p>
            
            
            
        </div>

        </div>
        
        
    )
}
export default CoffeeCards