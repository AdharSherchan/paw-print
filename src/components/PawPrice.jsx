const PawPrice = ({items, index}) => {
    return(
        <div className=" px-[24px] py-[16px] border 1px">
            <button type="button">{items.price}</button>
        </div>
    )
}
export default PawPrice