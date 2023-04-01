import React from "react";
import smallImage from "../assets/subcribe-4.jpg";
import HeroImage from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div className="flex w-full bg-transparent mt-14  justify-between">
      <div className="flex flex-col ml-32 mb-10  text-9xl font-medium mt-10 text-gold">
        <p>Explore The </p>
        <p className="flex">
          Best{" "}
          <span className="mt-5 ml-6">
            <img
              src={smallImage}
              className="rounded-3xl w-48  h-16"
              alt="Hero small "
            />
          </span>{" "}
          <span className="text-9xl text-gold ml-7 ">✦</span>
        </p>
        <p>Artwork on </p>
        <p>The Globe</p>
        <div className="flex text-2xl justify-evenly mt-12 mr-48">
          <p className="border cursor-pointer border-gold px-6 py-2 ml-4 mr-4   ">
            View All Gallery
          </p>
          <p className=" text-gray-300 mt-2 cursor-pointer text-3xl ml-10  ">
            Learn More <span>→</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col  mr- pr-36 font-paulRegular">
        <p className="text-gray-300 ml-80  text-xl  ">
          Explore the best artwork on the globe. We discover all <br /> art from
          artsits around the world with amazing <br /> experience and skill,
        </p>
        <img className="ml-[320px] mt-6 w-[45%]" src={HeroImage} alt="" />
        <p className="text-gray-500 ml-80  text-xl mt-5">
          Portrait of Prince Albert on Papier Mache <br /> Face Screen , 1840
        </p>
      </div>
    </div>
  );
};

export default Hero;
