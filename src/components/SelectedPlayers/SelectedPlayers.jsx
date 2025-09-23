import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({selectedPlayers, removePlayer}) => {

  return (


    <div className='space-y-5  pr-[30px] py-[15px] mt-5' >
      {
        selectedPlayers.map(player =>
            <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>
         )
      }
    </div>
  );
};

export default SelectedPlayers;
