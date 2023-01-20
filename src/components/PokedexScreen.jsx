import React from "react";

const PokedexScreen = ({ pokemon }) => {
  return (
    <>
      <div className="pokedex-screen">
        <div className="pokemon-info">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img className="pokemon-img" src={pokemon.avatar} alt="" />
        </div>
        <ul className="pokemon-stats">
          {pokemon.stats.map((element, i) => (
            <li className="pokemon-stat" key={i}>
              <span className="stat-name"> <b>{element.stat.name} :</b> </span>
              <span>{element.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PokedexScreen;

/* import Stat from './Stat.js'
// Pokedex.js ...
<ul className="pokemon-stats">
  {pokemon.stats.map(item => (
    <Stat key={item.stat.name} item={item}/>
  ))}
</ul>
// Pokedex.js ...


// Stat.js...
import React from 'react'

function Stat({ item }){
  return (
    <li className="pokemon-stat">
      <span className="stat-name"><b>{item.stat.name}: </b></span>
      <span>{item.base_stat}</span>
    </li>
  )
} */

{
  /* <li className="pokemon-stat">
            <span className="stat-name">
              <b> 320hp: </b>
            </span>
            <span>fuego</span>
          </li> */
}
{
  /* <div className="pokedex-screen">
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img
          className="pokemon-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <ul className="pokemon-stats">
          // Aquí iteraremos sobre la lista de estadísticas
        </ul>
      </div>
    </div> */
}
