import "./card.css";
import { useState } from "react";


function card(props) {
    const [isLogado, setIsLogado] = useState(false);

  return (
    <>
      <nav className="bloco">
        <img className="imagem" src={props.img} />
        <h1>{props.viagem}</h1>
        <h3>{props.avaliacao}</h3>
        <p>{props.saida}</p>
        <p>{props.info}</p>
        <h2>{props.valor}</h2>
          <button onClick={() => setIsLogado(!isLogado)}>
            {isLogado ? props.feito : props.fazer}
          </button>
      </nav>
    </>
  );
}

export default card;