import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center text-gray-400  w-full bg-transparent  mt-6  ">
      <div className="flex-grow   items-start justify-start ">
        <ul className="flex flex-row font-paulRegular ">
          <li className="ml-10 cursor-pointer text-[13px] ">Artists</li>
          <li className="ml-6 cursor-pointer text-[13px] ">Exhibit</li>
          <li className="ml-8 cursor-pointer text-[13px] ">About</li>
        </ul>
      </div>
      <div className="flex-grow ">
        <p className="font-sans text-white font-semibold text-lg ml-52 cursor-pointer  ">
          Arcade
        </p>
      </div>
      <div className="flex-grow ">
        <p className=" border border-gold  text-gold text-center mr-10 pl-2 px-2  cursor-pointer items-end justify-end ml-96">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Navbar;
