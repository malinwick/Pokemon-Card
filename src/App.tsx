import React, { useEffect, useState } from 'react';
import { fetchPokemon, fetchMove } from './utils';
import { Pokemon } from './types';

//import InfoContainer from './components/InfoContainer';
import PokemonCard from './components/PokomonCard';

import './app.css';

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  //const[move1, setMove1] = useState<MoveObject>();
  
  useEffect(() => {
    fetchPokemon('charizard').then((res) => setPokemon(res));
    // fetchMove('5').then((res) => setMove1(res))
  }, []);

  return (
    <div className='appRoot'>
      {/* <InfoContainer pokemon={pokemon} />   */}
      <PokemonCard pokemon={pokemon} /> 
      {/* <PokemonCard move1={move1} /> */}
    </div>
  );
};

export default App;
