import Header from "../components/header.jsx";
import Footer from "../components/Footer";
import NavBar from "../components/navBar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import card from "../../Components/card";
import hotel1 from "/hotel1.png"
import hotel2 from "/hotel2.png"
import hotel3 from "/hotel3.png"
import hotel4 from "/hotel4.png"
import '../../App.css'

function Hospedagens() {
    return (
        <>
          <Header />
    
          <NavBar />
    
          <a href="/hotel1"><Card img={hotel1} avaliacao="⭐⭐⭐⭐" viagem="Hotel em Roma" saida="Preço por pessoa" info="Diária por adulto" valor="R$2.433,00"/></a>
          <a href="/hotel2"><Card img={hotel2} avaliacao="⭐⭐⭐⭐⭐" viagem="Hotel em Tóquio" saida="Preço por pessoa" info="Diária por adulto" valor="R$1.338,00"/></a>
          <a href="/hotel3"><Card img={hotel3} avaliacao="⭐⭐⭐⭐" viagem="Hotel na Cidade do México" saida="Preço por pessoa" info="Diária por adulto" valor="R$424,00"/></a>
          <a href="/hotel4"><Card img={hotel4} avaliacao="⭐⭐⭐⭐⭐" viagem="Hotel em " saida="Preço por pessoa" info="Diária por adulto" valor="R$495,00"/></a>
    
          <Footer
            imgi={Instagram}
            insta="@grupo6"
            imge={gmail}
            email="grupo6@gmail.com"
            texto="Responsável pelo desenvolvimento: Grupo 06"
          />
        </>
      );
}

export default Hospedagens