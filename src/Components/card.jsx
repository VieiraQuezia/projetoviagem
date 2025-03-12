  import "./card.css";

  function card(props) {

    return (
      <>
          <nav className="bloco">
            <img className="imagem" src={props.img} />
            <h1>{props.viagem}</h1>
            <h3>{props.avaliacao}</h3>
            <p>{props.saida}</p>
            <p>{props.info}</p>
            <h2>{props.valor}</h2>
          </nav>
      </>
    );
  }

  export default card;
