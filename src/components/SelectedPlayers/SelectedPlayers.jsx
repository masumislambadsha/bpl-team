import React from 'react';
import delIcon from '../../assets/delete.png'

const SelectedPlayers = ({selectedPlayers}) => {

  return (

  
    <div className='space-y-5  pr-[30px] py-[15px] mt-5' >
      {
        selectedPlayers.map(player =>
          <div className='flex justify-between border-1 border-gray-200 p-6 rounded-4xl'>
            <div className='flex items-center gap-2 '>
              <img src={player.player_image} className='w-[80px] h-[80px] rounded-2xl bg-[#D9D9D9]' alt="" />
              <div >
                <h3 className=' font-semibold text-[24px] text-[#131313] '>{player.player_name}</h3>
                <p>{player.playing_role}</p>
              </div>
            </div>
            <button><img src={delIcon} alt="" /> </button>
          </div>
         )
      }
    </div>
  );
};

export default SelectedPlayers;
