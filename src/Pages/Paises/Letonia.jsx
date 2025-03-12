import Header from "../components/header.jsx";
import Footer from "../components/Footer";
import NavBar from "../components/navBar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import "../App.css";

function Letonia() {
  return (
    <>
      <Header />

      <NavBar />

      <p className="paragrafopais">
        A Letônia é um país do norte da Europa, localizado na região do Báltico,
        entre a Estônia, a Lituânia, a Rússia e a Bielorrússia. Sua capital,
        Riga, é a maior cidade dos países bálticos e é famosa por sua
        arquitetura em estilo art nouveau e seu centro histórico bem preservado,
        que é Patrimônio Mundial da UNESCO. A cultura letã tem fortes
        influências germânicas, escandinavas e eslavas, mas mantém uma
        identidade única, com tradições folclóricas ricas, incluindo músicas e
        danças populares que são celebradas no Festival Nacional de Canções e
        Danças da Letônia, um evento grandioso que ocorre a cada cinco anos. A
        natureza é um grande destaque do país, com florestas densas, lagos
        cristalinos e praias ao longo do Mar Báltico. A Letônia é um dos países
        mais verdes da Europa, com mais da metade de seu território coberto por
        florestas. O Parque Nacional de Gauja é um dos destinos naturais mais
        impressionantes. A Letônia ganhou destaque internacional recentemente
        com o filme de animação "Flow", que conquistou o Oscar de Melhor
        Animação em 2025. Dirigido por Gints Zilbalodis, o filme narra a
        história de um gato que, após uma inundação devastar seu lar, encontra
        refúgio em um barco habitado por diversas espécies, explorando temas de
        solidariedade e resiliência. Essa vitória representou o primeiro Oscar
        para a Letônia, destacando a capacidade de produções independentes do
        país em alcançar reconhecimento global.
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

export default Letonia;
