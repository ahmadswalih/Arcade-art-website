import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full text-gray-200  justify-between bg-transparent mt-10">
      <div className="flex ml-24 text-gray-500 justify-start items-start  ">
        <ul className="flex text-2xl font-paulRegular  justify-around ">
          <li className="cursor-pointer">Artists</li>
          <li className="mr-8 ml-8 cursor-pointer ">Exhibit</li>
          <li className="cursor-pointer ">About</li>
        </ul>
      </div>
      <div className="flex  justify-center mr-56  items-start">
        <p className="text-5xl items-center cursor-pointer  ">Arcade</p>
      </div>
      <div className="flex  mr-36">
        <p className=" text-3xl border border-gold px-6 cursor-pointer text-gold py-2">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Navbar;
