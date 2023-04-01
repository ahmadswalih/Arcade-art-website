import React from "react";
import video from "../assets/video.jpg";
const Work = () => {
  return (
    <div className="flex flex-col w-full  justify-start items-start bg-transparent  mt-32 mb-24">
      <p className="text-gold text-8xl ml-44 ">
        Every Work Of Art Tells <br /> A Story
      </p>
      <div className="flex w-full">
        <div className="flex flex-col ml-44 mt-24 text-gray-400 whitespace-nowrap font-paulRegular">
          <p className="text-2xl mb-10">
            Explore the best artwork on the globe. We discover all <br /> art
            from artsits around the world with amazing <br /> experience and
            skill,
          </p>
          <p className="text-2xl">
            We Can't hear you this proposal is a win-win situation <br /> which
            will cause a stellar paradigm shift,and produce a <br /> multi-fold
            increase in deliverables put it on the parking <br /> lot in artwork{" "}
          </p>
        </div>
        <div className="flex w-[100%] -mt-10 ml-[300px] mr-24 ">
          <img src={video} alt="video" />
        </div>
      </div>
    </div>
  );
};

export default Work;
