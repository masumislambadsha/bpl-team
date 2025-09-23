import React from 'react';
import delIcon from '../../assets/delete.png'

const SelectedCard = ({player, removePlayer}) => {

  const handleRemove = () =>{
    removePlayer(player.player_name, player.price_usd)
  }

  return (
             <div className='flex justify-between border-1 border-gray-200 p-6 rounded-4xl'>
            <div className='flex items-center gap-2 '>
              <img src={player.player_image} className='w-[80px] h-[80px] rounded-2xl bg-[#D9D9D9]' alt="" />
              <div >
                <h3 className=' font-semibold text-[24px] text-[#131313] '>{player.player_name}</h3>
                <p>{player.playing_role}</p>
              </div>
            </div>
            <button onClick={handleRemove} className=' cursor-pointer'><img src={delIcon} alt="" /> </button>
          </div>
  );
};

export default SelectedCard;
