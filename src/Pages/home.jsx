import Header from "../components/header.jsx";
import Footer from "../components/Footer";
import NavBar from "../components/navBar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import Card from '../Components/card.jsx'
import Roma from '/roma.png'
import "../App.css";

function App() {
  return (
    <>
      <Header />

      <NavBar />

      <Card img={Roma} avaliacao="⭐⭐⭐⭐⭐" viagem="Pacotes para Roma, Itália" saida="Saindo de São Paulo" info="Preço final por pessoa" valor="R$3.993,00"/>

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

export default App;




   
