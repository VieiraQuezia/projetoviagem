import Header from "../../Components/header.jsx";
import Footer from "../../Components/footer.jsx";
import NavBar from "../../Components/navBar.jsx";
import Instagram from "/instagram.png";
import Gmail from "/gmail.png";
import Coliseu from "/Coliseu.png";
import MonteFuji from "/Monte_Fuji.png";
import CasaJojo from "/Casa_Joao_Vitor.png";
import Gramado from "/Gramado.png";
import Cartao from "../../Components/cartao.jsx";
import "../../App.css";

function Turismo() {
  return (
    <div>
      <Header />
     
        <NavBar />
        <article className="blocoss">
        <Cartao
          img={Coliseu}
          viagem="Coliseu"
          saida="Em Roma"
          info="Com Budget"
          valor="R$ 220 por pessoa"
          feito="Agenciado"
          fazer="Agenciar"
        />

        <Cartao
          img={MonteFuji}
          viagem="Monte Fuji"
          saida="Em Japão"
          info="Com Hertz"
          valor="R$ 350 por pessoa"
          feito="Agenciado"
          fazer="Agenciar"
        />

        <Cartao
          img={CasaJojo}
          viagem="Casa do João Vitor"
          saida="Em Juarez"
          info="Com Movida"
          valor="R$ 2.999,99"
          feito="Agenciado"
          fazer="Agenciar"
        />

        <Cartao
          img={Gramado}
          viagem="Gramado"
          saida="Em Rio Grande do Sul"
          info="Com Florida Premium RentACar"
          valor="R$ 100"
          feito="Agenciado"
          fazer="Agenciar"
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

export default Turismo;