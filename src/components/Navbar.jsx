const Navbar = () => {
  return (
    <div className=" lg:flex-row justify-center font-sans font-bold fixed lg:flex hidden top-0 text-purple-200 text-3xl  m-3 p-2 gap-x-2 rounded-full  bg-gradient-to-r from-violet-800 via-blue-800 to-purple-900 ">
      
        <a rel="stylesheet" href="" className=" py-1 px-10 m-1 rounded-full bg-none  transition duration-500 hover:bg-violet-700">
          {" "}
          Home
        </a>
        <a rel="stylesheet" href="" className=" p-1 px-10 m-1 rounded-full bg-none transition duration-500  hover:bg-violet-700">
          {" "}
          Products{" "}
        </a>
        <a rel="stylesheet" href="" className=" p-1 px-10 m-1 rounded-full bg-none  transition duration-500 hover:bg-violet-700">
          {" "}
          Blog{" "}
        </a>
        <a rel="stylesheet" href="" className=" p-1 px-10 m-1 rounded-full bg-none  transition duration-500 hover:bg-violet-700">
          {" "}
          About{" "}
        </a>
      </div>
    
  );
};
export default Navbar;
