import React, { useState, useEffect } from 'react';
import { Pokemon, MoveObject } from '../types';
import { fetchMove } from '../utils';

interface Props {
  pokemon?: Pokemon,
  //move1?: MoveObject;
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon }) => {
  const [move1, setMove1] = useState<MoveObject>();
  useEffect(() => {
    fetchMove('13').then((res) => setMove1(res))
  }, []);

  if (pokemon && move1) {
    console.log(pokemon);
    console.log(move1.flavor_text_entries[5]);
    return (
      <div className='infoContainer'>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
        <h1>Nå er det kun litt koding som gjenstår, lykke til!</h1>
        <h5>{move1.flavor_text_entries[5].flavor_text}</h5>
      </div>
    );
  }
  return null;
};
export default InfoContainer;
