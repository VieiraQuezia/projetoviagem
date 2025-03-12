import Header from "../../Components/header.jsx";
import Footer from "../../Components/footer.jsx";
import NavBar from "../../Components/navBar.jsx";
import Instagram from "/instagram.png";
import Gmail from "/gmail.png";
import Guilherme from "/guilherme.png";
import Hayeska from "/hayeska.png";
import Leonardo from "/leonardo.png";
import Quezia from "/quezia.png";
import "../../App.css";

function SobreNos() {
  return (
    <div>
      <Header />

      <NavBar />
      <article className="blocoss">
        <div className="bloquinho">
          <img src={Guilherme} />
          <p>Guilherme G. Santana</p>
        </div>

        <div className="bloquinho">
          <img src={Hayeska} />
          <p>Hayeska L. A. Machado</p>
        </div>

        <div className="bloquinho">
          <img src={Leonardo} />
          <p>Leonardo M. Vicente</p>
        </div>

        <div className="bloquinho">
          <img src={Quezia} />
          <p>Quezia A. Vieira</p>
        </div>
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

export default SobreNos;
