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

