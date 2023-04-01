import React from "react";
import LargeImage from "../assets/about-1.jpg";
import smallImage from "../assets/about-2.jpg";
const About = () => {
  return (
    <div className="flex w-full bg-transparent mt-32 mb-24">
      <div className="flex flex-col mt-24">
        <img
          className="w-[80%]  container ml-32"
          src={LargeImage}
          alt="House Painting"
        />
        <img src={smallImage} className="w-[50%] mt-[-120px] ml-96 " alt="" />
      </div>
      <div className="flex w-full flex-col ml-44 mt-24 mr-64">
        <p className="text-8xl text-gold ">
          Collecting The Old <br /> Artworks For You
        </p>
        <p className="text-gray-300 text-2xl mt-4 font-paulRegular">
          Explore the best artwork on the globe. We discover all art from
          artsits <br /> around the world with amazing experience and skill, the
          best art and <b /> museum gallery and exhibitions.
        </p>
        <div className="flex flex-col mt-10">
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-gold text-6xl ">
                40+ <br />{" "}
              </p>
              <span className="text-gray-400 text-xl  ">Handicraft</span>{" "}
            </div>
            {/* <p className="text-gold ">—</p> */}
            <div className="flex flex-col ml-24">
              <p className="text-gold text-6xl ">
                10K+ <br />{" "}
              </p>
              <span className="text-gray-400 text-xl ">Painting Work</span>{" "}
            </div>
            <div className="flex flex-col ml-24">
              <p className="text-gold text-6xl">
                100+ <br />{" "}
              </p>
              <span className="text-gray-400 text-xl ">Awesome Statue</span>{" "}
            </div>
            <br />
          </div>
          <p className=" border border-gold w-fit px-4 py-2  text-gold mt-10 cursor-pointer text-3xl ml-6  ">
            Learn More <span>→</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
