const PawPrice = ({items, index, setVal }) => {
    
    
    return(
        <div className=" xl:px-[24px] px-[20px] xl:py-[16px] p-4 border 1px">
            <button type="button" onClick={() => setVal(items.price)}>$ {items.price}</button>
        </div>
    )
}
export default PawPrice