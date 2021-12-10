import { fetchOtherPokemon } from "./utils";
import { useEffect, useState } from "react";

const Card = ({ name, url }) => {
  useEffect(() => {
    fetchOtherPokemon(url, setPokemon, true);
  }, []);
  const [pokemon, setPokemon] = useState({});

  return (
    <div>
      <h1>{name}</h1>
      <h2>{pokemon.base_experience}</h2>
      {pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt={name} />
      )}
    </div>
  );
};

export default Card;
