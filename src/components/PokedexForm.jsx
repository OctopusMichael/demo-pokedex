import React, {useState} from "react";

const PokedexForm = ({setPokemonId}) => {
  const [poki, setPoki] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(poki !== " "){
      const pokemonId = window.isNaN(parseInt(poki)) ? poki.toLowerCase() : poki
      setPokemonId(pokemonId)
      setPoki('')
      return
    }
  }
  const handleChange = (e) =>{
    setPoki(e.target.value)
    //console.log(e.target.value)
  }

  return (
    <>
      <form className="pokemon-form" onSubmit={handleSubmit}> 
        <input 
          className="pokemon-input"
          type="text"
          name="poki"
          value={poki}
          placeholder="Search your pokemon here"
          onChange={handleChange}
          autoComplete="on"
        />
        <input type="submit" className="pokemon-btn" value="" />
      </form>
    </>
  )
  };
export default PokedexForm;
