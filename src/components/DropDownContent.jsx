const DropDownContent = ({items, index}) => {
    console.log("DDC items", items)
    return (
        <div key={index} className="h-10 w-full border border-black rounded-lg bg-black/20 text-slate-300">
            <p>
            {items.name}
            </p>
            
        </div>
    )
}
export default DropDownContent