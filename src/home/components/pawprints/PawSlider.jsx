import { useState } from "react";

const PawSlider = ({className, setVal}) => {
  const [data, setData] = useState(0);
  return (
    <div className="flex justify-center items-center relative gap-3">
      <input
        type="range"
        min="0"
        max="1340"
        value={data}
        onChange={(e) => {
          setData(e.target.value)
          setVal(data)
        }}
        className={`${className} slider`}
      />
        {" "}
      
    </div>
  );
};
export default PawSlider;
