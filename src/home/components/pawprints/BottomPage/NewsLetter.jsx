import PawButton from "../PawButton";

const NewsLetter = () => {
  return (
    <div className="flex md:flex-row flex-col w-screen xl:items-center justify-between gap-5 bg-[#93CEAA] xl:px-[250px]  p-5 ">
      <div className="flex flex-col">
        <p className="text-[20px] montserrat font-extrabold">
          Join our newsletter
        </p>
        <p className="text-[16px]">Pawprint that has been for pets.</p>
      </div>
      <div>
        <form className="flex flex-row  gap-[8px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-[20px] xl:py-[10px] py-[5px] rounded-lg"
          />
          <PawButton
            className={
              "work-sans flex items-center justify-center font-medium !text-[16px] gap-3 !px-[20px] !py-[10px]"
            }
            onClick={() => alert("Thank you for Subscribing!")}
            type={"button"}
          >
            Subscribe
          </PawButton>
        </form>
      </div>
    </div>
  );
};
export default NewsLetter;
