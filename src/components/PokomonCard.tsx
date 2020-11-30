import React from 'react';
import { Pokemon, MoveObject } from '../types';
//import { fetchMove } from '../utils';


interface Props {
  pokemon?: Pokemon;
  //move1?: MoveObject;
}

const PokemonCard: React.FunctionComponent<Props> = ({ pokemon }) => {
//     const [move1, setMove1] = useState<MoveObject>();
//     useEffect(() => {
//         fetchMove('13').then((res) => setMove1(res))
//   }, []);

    
  if (pokemon ) {
      console.log(pokemon);
    return (
      <div className="pokeContainer">
           <div className="pokemon_name">
                <h3 className="alignLeft">{pokemon.name}</h3>
                <h3 className="alignRight">&nbsp;Pokemon Type: {pokemon.types[0].type.name}</h3>
        
            </div>
        <div className="wrapper">

            <div className="pokemonImg">
            <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
          width="400" height="200"
        />
        <div className="info">
           <p>NO: {pokemon.id}</p>
           <p>&nbsp;HT: {pokemon.height} dm.</p>
           <p>&nbsp;WT: {pokemon.weight} hg.</p>
           </div> 
        </div>
        </div>
        
        <div className="skills">
            <h4>Moves:</h4>
            <h4>{pokemon.moves[0].move.name}</h4>
            <h4>{pokemon.moves[1].move.name}</h4>
            {/* <h5>{move1.accuracy}</h5> */}
        </div>
      </div>
    );
  }
  return null;
};
export default PokemonCard;