import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" lg:flex-row justify-center font-sans font-bold fixed lg:flex hidden top-0 text-purple-200 text-3xl  m-3 p-2 gap-x-2 rounded-full  bg-gradient-to-r from-violet-800 via-blue-800 to-purple-900 ">
      <NavLink
        to={`/Meme`}
        className=" py-1 px-10 m-1 rounded-full bg-none  transition duration-500 hover:bg-violet-700 "
        style={({isActive}) => {
          return{ backgroundColor: isActive? "indigo": "none"}
        }}
      >
        HOME
      </NavLink>
      <NavLink
        to={`/MemeProducts`}
        className=" py-1 px-10 m-1 rounded-full bg-none  transition duration-500 hover:bg-violet-700  active:bg-blue-300"
        style={({isActive}) => {
          return{ backgroundColor: isActive? "indigo": "none"}
        }}
      >
        PRODUCTS
      </NavLink>
      <NavLink
        to={`/MemeBlog`}
        className=" py-1 px-10 m-1 rounded-full bg-none  transition duration-500 hover:bg-violet-700  active:bg-blue-300"
        style={({isActive}) => {
          return{ backgroundColor: isActive? "indigo": "none"}
        }}
      >
        BLOG
      </NavLink>
      <NavLink
        to={`/MemeAbout`}
        className=" py-1 px-10 m-1 rounded-full bg-none  transition duration-500 hover:bg-violet-700  active:bg-blue-300"
        style={({isActive}) => {
          return{ backgroundColor: isActive? "indigo": "none"}
        }}
      >
        ABOUT
      </NavLink>
    </div>
  );
};
export default Navbar;
