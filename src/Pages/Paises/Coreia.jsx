import Header from "../../Components/header.jsx";
import Footer from "../../components/Footer.jsx";
import NavBar from "../../components/navBar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";

import "../../App.css";

function Coreia() {
  return (
    <>
      <Header />

      <NavBar />

      <p className="paragrafopais">
        A Coreia do Sul é um país do leste da Ásia conhecido por seu rápido
        desenvolvimento tecnológico, cultura pop influente e uma história rica.
        Localizado na Península Coreana, o país tem como capital Seul, uma das
        cidades mais modernas e conectadas do mundo. A cultura sul-coreana
        conquistou o mundo com o K-pop (com grupos como BTS e BLACKPINK), os
        doramas (séries coreanas de grande sucesso) e a culinária tradicional,
        que inclui pratos como kimchi, bibimbap, tteokbokki e bulgogi. A Coreia
        do Sul também é líder em inovação, sendo lar de gigantes tecnológicos
        como Samsung, LG e Hyundai. Além disso, o país valoriza muito a educação
        e o trabalho, o que contribuiu para seu crescimento econômico
        impressionante nas últimas décadas. Na parte histórica, o país tem
        palácios antigos, templos budistas e vilarejos tradicionais,
        contrastando com sua arquitetura futurista e arranha-céus. O respeito
        pela tradição se mantém forte, especialmente em celebrações como o
        Chuseok (Dia de Ação de Graças coreano) e o Seollal (Ano-Novo Lunar). A
        Coreia do Sul também é conhecida por sua paixão por esportes eletrônicos
        (eSports) e pela indústria da beleza e skincare, que se tornou
        referência global.
      </p>

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

export default Coreia;
