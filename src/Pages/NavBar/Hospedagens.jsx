import Header from "../../Components/header.jsx";
import Footer from "../../Components/footer.jsx";
import NavBar from "../../Components/navBar.jsx";
import Instagram from "/instagram.png";
import Gmail from "/gmail.png";
import Card from "../../Components/card.jsx";
import Hotel1 from "/hotel1.png"
import Hotel2 from "/hotel2.png"
import Hotel3 from "/hotel3.png"
import Hotel4 from "/hotel4.png"
import '../../App.css'

function Hospedagens() {
  return (
    <>
      <Header />

      <NavBar />

      <Card img={Hotel1} avaliacao="⭐⭐⭐⭐" viagem="Hotel em Roma" saida="Preço por pessoa" info="Diária por adulto" valor="R$2.433,00" />
      <Card img={Hotel2} avaliacao="⭐⭐⭐⭐⭐" viagem="Hotel em Tóquio" saida="Preço por pessoa" info="Diária por adulto" valor="R$1.338,00" />
      <Card img={Hotel3} avaliacao="⭐⭐⭐⭐" viagem="Hotel na Cidade do México" saida="Preço por pessoa" info="Diária por adulto" valor="R$424,00" />
      <Card img={Hotel4} avaliacao="⭐⭐⭐⭐⭐" viagem="Hotel em " saida="Preço por pessoa" info="Diária por adulto" valor="R$495,00" />

      <Footer
        imgi={Instagram}
        insta="@grupo6"
        imge={Gmail}
        email="grupo6@gmail.com"
        texto="Responsável pelo desenvolvimento: Grupo 06"
      />
    </>
  );
}

export default Hospedagens