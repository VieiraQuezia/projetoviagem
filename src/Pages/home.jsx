import Header from "../components/header.jsx";
import Footer from "../components/Footer";
import NavBar from "../components/navBar.jsx";
import Slider from '../Components/slider.jsx'
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import Card from '../Components/card.jsx'
import Japao from '/japao.png'
import Mexico from '/cidade-do-mexico.jpg'
import Roma from '/Roma.jpg'
// import Brasil from '/brasil.png'
import "../App.css";

function App() {
  return (
    <>
      <Header />
<Slider/>      <NavBar />
      <div className="blocos">
      <a href="/italia"><Card imge={Roma} avaliacao="⭐⭐⭐⭐⭐" viagem="Pacotes para Roma, Itália" saida="Saindo de São Paulo" info="Preço final por pessoa" valor="R$3.993,00"/></a>
      <a href="/japao"><Card imge={Japao} avaliacao="⭐⭐⭐⭐⭐" viagem="Pacotes para Tóquio, Japão" saida="Saindo de São Paulo" info="Preço final por pessoa" valor="R$3.993,00"/></a>
      <a href="/mexico"><Card imge={Mexico} avaliacao="⭐⭐⭐⭐⭐" viagem="Pacotes para Cidade do México, México" saida="Saindo de São Paulo" info="Preço final por pessoa" valor="R$3.993,00"/></a>
      {/* <a href="/brasil"><Card img={Brasil} avaliacao="⭐⭐⭐⭐⭐" viagem="Pacotes para Roma, Itália" saida="Saindo de São Paulo" info="Preço final por pessoa" valor="R$3.993,00"/></a> */}
      </div>

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




   
