import React, { useState } from "react";
import profileIcon from "../../assets/Group.png";
import flagIcon from "../../assets/flag.png";
// import { toast } from "react-toastify";

const PlayerCart = ({ player, setAvailableBalance, availableBalance, setSelectedPlayers, selectedPlayers }) => {
  const [isSelected, setSelected] = useState(false);

  const handleSelect = (player) => {
    if(availableBalance < player.price_usd ){
      alert('dont have enough money')
      return
    }
      if(selectedPlayers.length >= 6){
    alert('you have taken maxmimum players ')
    return
  }

    const newArr = [...selectedPlayers, player]
    setSelectedPlayers(newArr)
    setSelected(true),
    setAvailableBalance(availableBalance - player.price_usd);
  };

  return (
    <div>
      <div className="cursor-pointer card bg-base-100 md:w-96 w-[320px] border-1 p-4 border-gray-200">
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
            <p className="font-bold text-[16px] text-end pr-4">
              {player.rating}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-[14px] pl-4 text-[#131313] ">
              Price: ${player.price_usd}
            </h4>
            <button
              disabled={isSelected}
              onClick={() => {handleSelect(player)}}
              className=" hover:border-none font-regular text-[14px] btn btn-ghost text-[#131313] p-0 border-0"
            >
              {isSelected === false ? (
                <h4 className="font-regular text-[14px] btn btn-ghost hover:bg-cyan-500 shadow-2xl border-gray-300 text-[#131313] rounded-lg">
                  Choose Player
                </h4>
              ) : (
                <h4 className="font-regular text-[14px] btn btn-ghost shadow-2xl border-gray-300 text-[#131313] rounded-lg">
                  Player Selected
                </h4>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCart;
