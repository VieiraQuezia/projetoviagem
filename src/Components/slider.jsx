import { useState } from "react";
import imagem1 from "../assets/Slider_1.jpg";
import imagem2 from "../assets/Slider_2.jpg";
import imagem3 from "../assets/Slider_3.jpg";
import '../Components/slider.css'

function SliderHome() {
  const imagens = [imagem1, imagem2, imagem3];

  const [imagemAtual, setImagemAtual] = useState(0);

  const Proximo = () => {
    setImagemAtual((imagemAtual + 1) % imagens.length);
  };

  const Anterior = () => {
    setImagemAtual((imagemAtual - 1 + imagens.length) % imagens.length);
  };

  return (
    <article className="meio">
  <button id="prevBtn" className="sliderBtn" onClick={Anterior}>
          ⬅
        </button>
      <div id="slider">
        
        {imagens.map((imagem, index) => (
          <img
            key={index}
            className="img"
            src={imagem}
            style={{  display: index === imagemAtual ? "block" : "none" }}/>
        ))}
      

       
      </div>
      <button id="nextBtn" className="sliderBtn" onClick={Proximo}>
          ➡
        </button>

    </article>
  );
}

export default SliderHome;