const ResponsiveNav = ({setHamClick}) => {
  return (
    <div className="flex justify-end lg:hidden ">
      <div className="flex flex-col right-0 h-screen w-[70%] bg-slate-600 border border-red-800">
        <div className="size-16 border border-red-500">
          <button className="text-5xl" onClick={() => setHamClick(false)}> X </button>
        </div>
        <div className="flex flex-col h-full justify-center items-start text-purple-200 font-sans font-bold text-2xl m-3 p-2 gap-y-5 ">
          <a
            rel="stylesheet"
            href=""
            className=" py-1 px-5 rounded-full w-full "
          >
            {" "}
            Home
          </a>
          <a
            rel="stylesheet"
            href=""
            className=" p-1 px-5 m-1 rounded-full w-full "
          >
            {" "}
            Products{" "}
          </a>
          <a
            rel="stylesheet"
            href=""
            className=" p-1 px-5 m-1 rounded-full w-full "
          >
            {" "}
            Blog{" "}
          </a>
          <a
            rel="stylesheet"
            href=""
            className=" p-1 px-5 m-1 rounded-full w-full "
          >
            {" "}
            About{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveNav;
