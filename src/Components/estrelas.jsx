import "./estrela.css";

function Estrelas() {

  return (
    <>
    
    <h2>Avaliar destino</h2>

<div className="stars">
  <input value="1" name="rate" id="star1" type="radio"/>
  <label title="text" for="star1"></label>

  <input value="2" name="rate" id="star2" type="radio"/>
  <label title="text" for="star2"></label>

  <input value="3" name="rate" id="star3" type="radio"/>
  <label title="text" for="star3"></label>

  <input value="4" name="rate" id="star4" type="radio"/>
  <label title="text" for="star4"></label>

  <input value="5" name="rate" id="star5" type="radio"/>
  <label title="text" for="star5"></label>
</div>

    </>
     
  );
}

export default Estrelas;
