const PokemonCard = (props) => {
  return (
    <figure>
      {props["image"] ? <img src={props.image} alt={props.name} /> : "???"}
      <figcaption>{props.name}</figcaption>
    </figure>
  );
};

export default PokemonCard;
