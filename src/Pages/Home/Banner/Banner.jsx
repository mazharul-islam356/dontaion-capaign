import { useState } from "react";
import SearchFunction from "../SearchFunction/SearchFunction";
import { IoSearch } from "react-icons/io5";


const Banner = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <div>
      <div className="mt-2 h-[450px] bg-no-repeat bg-[url('https://i.ibb.co/9NF3StX/Donate.jpg')] bg-center bg-cover lg:mr-6">
        <div className="absolute top-36 lg:top-[120px] md:top-32 left-0 right-0 -bottom-20 bg-white bg-opacity-25">
          <h1 className="flex  items-center justify-center text-black text-4xl font-bold relative top-40 text-center">
            I Grow By Helping People In Need
          </h1>

          <div className="flex items-center justify-center h-full my-auto">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input rounded-r-none mb-40 lg:mb-56 input-bordered w-full max-w-xs"
            />

            <div className="border p-4 rounded-r-lg cursor-pointer  rounded-l-none bg-white mb-40 mr-2 lg:mb-56 "><IoSearch /></div>
          </div>
        </div>
      </div>
      <SearchFunction searchValue={searchValue}></SearchFunction>
    </div>
  );
};

export default Banner;
