import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleClick = () => {
    setpokemonIndex(pokemonIndex + 1);
  };

  const handledéClick = () => {
    setpokemonIndex(pokemonIndex - 1);
  };

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <PokemonCard pokemonList={pokemonList} pokemon={pokemon} />
      <p>{pokemonIndex}</p>
      {pokemonIndex > 0 ? <button onClick={handledéClick}>DéClick</button> : ""}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClick}>Click</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
