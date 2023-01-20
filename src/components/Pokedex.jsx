import React, { useState, useEffect } from "react";
import PokedexScreen from "./PokedexScreen";

function Pokedex() {
  const [pokemon, setPokemon] = useState({
    name: "",
    avatar: "",
    stats: [],
  });
  //const [loading, setLoading] = useState(true);
  const RandomId = Math.floor(Math.random() * 1000 + 1);
  const [pokemonId, setPokemonId] = useState(RandomId);

  const handleRight = () => {
    setPokemonId(pokemonId + 1);
  };
  const handleLeft = () => {
    setPokemonId(pokemonId - 1);
  };
  const handleRestar = () => {
    setPokemonId(RandomId);
  };

  useEffect(() => {
    const getData = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data)
      setPokemon({
        name: data.name,
        avatar: data.sprites.front_default,
        stats: data.stats,
      });
    };
    getData();
  }, [pokemonId]);

  console.log(pokemon.name);
  console.log(pokemon.avatar);
  console.log(pokemon.stats);
  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className="light is-sky is-big" />
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>
        <div className="pokedex-screen-container">
          <PokedexScreen pokemon={pokemon} />
        </div>
        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <button onClick={handleRestar} className="light is-blue is-medium">
              ⭯
            </button>
            <button onClick={handleLeft} className="light is-orange is-large">
              ⪡
            </button>
            <button onClick={handleRight} className="light is-green is-large">
              ⪢
            </button>
          </div>
        </div>
      </div>
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back" />
      <h1 className='pokemon-name'> Created by octopus 🐙</h1>
      
    </div>
  );
}

export default Pokedex;
