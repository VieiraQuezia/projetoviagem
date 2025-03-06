import Header from "../components/header.jsx";
import Footer from "../components/Footer";
import NavBar from "../components/navBar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";

import "../App.css";

function App() {
  return (
    <>
      <Header />

      <NavBar />
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
