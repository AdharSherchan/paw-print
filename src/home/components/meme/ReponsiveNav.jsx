import { NavLink } from "react-router-dom";

const ResponsiveNav = ({ setHamClick }) => {
  return (
    <div className="flex  lg:hidden h-0 ">
      <div className="flex flex-col right-0 min-h-screen w-[70%] bg-slate-800 top-0 fixed transition  duration-300">
        <div className="size-16 ml-5 mt-3">
          <button
            className="text-5xl text-white"
            onClick={() => setHamClick(false)}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <div className="flex flex-col  h-[80%] justify-center items-start text-white font-sans font-bold text-2xl mt-10 p-2 gap-y-5 ">
          <NavLink to={`/Meme`} 
          className=" p-1 px-5 m-1 rounded-full w-full "
          style={({isActive}) => {
            return{ backgroundColor: isActive? "purple": "none"}
          } }
          >
            HOME
          </NavLink>
          <NavLink
            to={`/MemeProducts`}
            className=" p-1 px-5 m-1 rounded-full w-full "
            style={({isActive}) => {
              return{ backgroundColor: isActive? "purple": "none"}
            }}
          >
            PRODUCTS
          </NavLink>
          <NavLink to={`/MemeBlog`} 
          className=" p-1 px-5 m-1 rounded-full w-full  active:bg-blue-300"
          style={({isActive}) => {
            return{ backgroundColor: isActive? "purple": "none"}
          }}
          >
            BLOG
          </NavLink>
          <NavLink to={`/MemeAbout`} 
          className=" p-1 px-5 m-1 rounded-full w-full  active:bg-blue-300"
          style={({isActive}) => {
            return{ backgroundColor: isActive? "purple": "none"}
          }}
          >
            {" "}
            ABOUT
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveNav;
