import React from "react";
import bgImg from "../../assets/bg-shadow.png";
import subs from "../../assets/Frame 11 (1).png";

const Subscribe = () => {
  return (
    <div className="bg-[#060919] h-fill mt-[150px] text-center mb-[-3px] flex flex-col justify-center items-center relative">
      <div
        style={{ backgroundImage: `url(${bgImg})`, }}
        className=" bg-white h-[336px] w-9/12 flex flex-col justify-center items-center space-y-5 absolute top-[-150px] rounded-3xl"
      >
        <h3 className="font-semibold text-[32px] text-[#131313]">
          Subscribe to our Newsletter
        </h3>
        <p className="text-[20px] font-medium text-[#13131370] ">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            className="h-[56px] p-[16px] w-[400px] border-1 border-gray-400 rounded-2xl"
            placeholder="Enter your email"
          />
          <button className=" cursor-pointer">
            <img src={subs} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
