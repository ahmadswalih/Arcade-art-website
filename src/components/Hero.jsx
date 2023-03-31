import React from "react";
import smallImage from "../assets/subcribe-4.jpg";
const Hero = () => {
  return (
    <div className=" w-full justify-between  items-center  ">
      <div className="flex text-gold mt-10 ml-10 ">
        <div className="flex justify-start text-8xl mt-4 font-sans font-medium">
          <div className="flex flex-col">
            <p className="flex">Explore The</p>
            <p className="flex">
              Best{" "}
              <span>
                {" "}
                <img
                  src={smallImage}
                  className="w-[100px] rounded-xl pl-2"
                  alt="hero image"
                />{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-end items-end"> Image Section</div>
      </div>
    </div>
  );
};

export default Hero;
