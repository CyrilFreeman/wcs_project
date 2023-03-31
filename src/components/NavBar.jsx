function NavBar({ setPokemonIndexList, pokemonList, pokemonIndexList }) {
  const handleClickPokemon = (pokeName) => {
    const index = pokemonList.findIndex((poke) => poke.name === pokeName);
    setPokemonIndexList(index);
    pokeName === "pikachu" ? alert("pika pikachu !!!") : null;
  };
  return (
    <div>
      {pokemonList.map((poke) => (
        <button key={poke.name} onClick={() => handleClickPokemon(poke.name)}>
          {poke.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
