import React from "react";
import imageOne from "../assets/art-gallery.jpg";
import imageTwo from "../assets/art-grallery-2.jpg";
import imageThree from "../assets/disaster.jpg";
import imageFour from "../assets/art-gallery-3.jpg";
const Gallery = () => {
  return (
    <div className="flex flex-col w-full bg-transparent mt-36  justify-center items-center ">
      <p className="text-7xl justify-center items-center text-gold mb-16  ">
        Our Art Gallery
      </p>
      <div className="flex mt-10 font-paulRegular justify-center  ">
        <div className="flex flex-col ml-96">
          <img className="w-[50%] " src={imageOne} alt="first " />
          <p className="text-gray-400 text-2xl mt-4 ">
            Near Brodick, Isle of Arran, <br /> Scotland,1894-1851 by William{" "}
            <br /> Andrews Nesfield
          </p>
        </div>
        <div className="flex flex-col mr-64 justify-center ">
          <img src={imageTwo} className="" alt="first " />
          <p className="text-gray-400 text-2xl mt-4">
            Near Glarus,Switzerland , 1781 by John Warwick Smith
          </p>
        </div>
      </div>
      <div className="flex font-paulRegular">
        <div className="flex flex-col ">
          <img
            className="w-[550px] h-[700px] mt-[-25px] "
            src={imageThree}
            alt="first "
          />
          <p className="text-gray-400 text-2xl mt-4 ">
            Disaster Scene in a Cornish Fishing Village,1889 <br /> by Walter
            Langley
          </p>
        </div>
        <div className="flex flex-col  ">
          <img src={imageFour} className="w-[60%] ml-64 mt-16" alt="first " />
          <p className="text-gray-400 text-xl ml-64 items-center mt-4">
            A Roman Water Carrier,1857 by Carl Haag
          </p>
        </div>
      </div>
      <p className="text-gold text-3xl border border-gold px-4 py-2 mt-7 cursor-pointer">
        View All Collections
      </p>
    </div>
  );
};

export default Gallery;
