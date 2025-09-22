import React, { use } from "react";
import profileIcon from "../../assets/Group.png";
import flagIcon from "../../assets/flag.png";

const AvailablePLayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div className="mt-[100px] flex flex-wrap md:gap-24 space-y-5 justify-center items-center">

    {
      playersData.map(player => <div className="cursor-pointer card bg-base-100 w-96 border-1 p-4 border-gray-200">
        <figure>
          <img
            className="rounded-2xl w-[350px] h-[350px] object-cover"
            src={player.player_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body px-0">
          <h2 className="card-title mb-5">
            <img src={profileIcon} /> {player.player_name}
          </h2>
          <div className="flex justify-between items-center border-b-1 border-gray-200">
            <div className="opacity-70 flex gap-3 items-center justify-center pl-4">
              <img src={flagIcon} alt="" />
              <p>{player.player_name}</p>
            </div>
            <h4 className="font-regular text-[14px] btn btn-ghost text-[#131313]">
              {player.playing_role}
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-regular text-[14px] btn btn-ghost text-[#131313] ">
              {player.batting_style}
            </h4>
            <p className="text-end pr-4">{player.bowling_style}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-[16px] pl-4">Rating</p>
            <p className="font-bold text-[16px] text-end pr-4">{player.rating}</p>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-[14px] pl-4 text-[#131313] ">
              Price: ${player.price_usd}
            </h4>
            <h4 className="font-regular text-[14px] btn btn-ghost text-[#131313]">
              Choose Player
            </h4>
          </div>
        </div>
      </div>)
    }

      {/* <div className="card bg-base-100 w-96 border-1 p-4 border-gray-200">
        <figure>
          <img
            className="rounded-2xl"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body px-0">
          <h2 className="card-title mb-5">
            <img src={profileIcon} /> Card Title{" "}
          </h2>
          <div className="flex justify-between items-center border-b-1 border-gray-200">
            <div className="opacity-70 flex gap-3 items-center justify-center pl-4">
              <img src={flagIcon} alt="" />
              <p>India</p>
            </div>
            <h4 className="font-regular text-[14px] btn btn-ghost text-[#131313]">
              All-Rounder
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-regular text-[14px] btn btn-ghost text-[#131313] ">
              Left-Hand-Bat
            </h4>
            <p className="text-end pr-4">Left-Hand-Bat</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-[16px] pl-4">Rating</p>
            <p className="font-bold text-[16px] text-end pr-4">5</p>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-[14px] pl-4 text-[#131313] ">
              Price: $1500000
            </h4>
            <h4 className="font-regular text-[14px] btn btn-ghost text-[#131313]">
              Choose Player
            </h4>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AvailablePLayers;
