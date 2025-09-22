import React from "react";

import bgImg from "../../assets/bg-shadow.png";
import bannerMain from '../../assets/banner-main.png'

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" bg-[#131313] bg-no-repeat bg-cover md:px-[165px] py-[59px] rounded-3xl mt-13 flex flex-col justify-center items-center space-y-[18px] mb-[100px]">
        <img src={bannerMain} className="" alt="" />
        <h1 className="text-white text-center text-[40px] font-bold ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h3 className="text-[#FFFFFF70] text-[24px] font-medium ">Beyond Boundaries Beyond Limits</h3>
        <div className="border-2 border-[#E7FE29] rounded-xl">
        <button className="bg-[#E7FE29] btn  font-bold text-[16px] text-[#131313] px-[20px] py-[19px]  rounded-xl border-6 border-black">Claim Free Credit</button>
        </div>
    </div>
  );
};

export default HeroSection;
