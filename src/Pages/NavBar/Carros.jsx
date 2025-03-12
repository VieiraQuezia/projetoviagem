import Header from "../../Components/header.jsx";
import Footer from "../../Components/footer.jsx";
import NavBar from "../../Components/navBar.jsx";
import Instagram from "/instagram.png";
import Gmail from "/gmail.png";
import Cartao from "../../Components/cartao.jsx";
import Carro from "/carro.png";

import "../../App.css";

function Carros() {
  return (
    <div>
      <Header />
     
        <NavBar />
        <article className="blocoss">
        <Cartao
          img={Carro}
          viagem="Carro Econômico"
          saida="Em Lisboa"
          info="Com Budget"
          valor="R$ 148"
          feito="Alugado"
          fazer="Alugar"
        />

        <Cartao
          img={Carro}
          viagem="Carro Econômico"
          saida="Em Santiago"
          info="Com Hertz"
          valor="R$ 130"
          feito="Alugado"
          fazer="Alugar"
        />

        <Cartao
          img={Carro}
          viagem="Carro Econômico"
          saida="Em Belo Horizonte"
          info="Com Movida"
          valor="R$ 135"
          feito="Alugado"
          fazer="Alugar"
        />

        <Cartao
          img={Carro}
          viagem="Carro Econômico"
          saida="Em Miami"
          info="Com Florida Premium RentACar"
          valor="R$ 244"
          feito="Alugado"
          fazer="Alugar"
        />
      </article>
      <Footer
        imgi={Instagram}
        insta="@grupo6"
        imge={Gmail}
        email="grupo6@gmail.com"
        texto="Responsável pelo desenvolvimento: Grupo 06"
      />
    </div>
  );
}

export default Carros;
