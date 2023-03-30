import { useState } from "react";
function NavBar({ pokemonIndex, setpokemonIndex, pokemonList }) {
  console.log();

  const handleClick = () => {
    setpokemonIndex(pokemonIndex + 1);
  };

  const handledéClick = () => {
    setpokemonIndex(pokemonIndex - 1);
  };
  return (
    <div>
      {pokemonIndex > 0 ? <button onClick={handledéClick}>DéClick</button> : ""}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClick}>Click</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
