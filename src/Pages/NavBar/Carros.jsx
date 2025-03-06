import Card from "../../Components/card"
import Carro from "/carro.png"
import "../..//App.css"


function Carros () {
    return (
        <div>
        <a href="/carro1"><Card img={Carro} viagem="Carro Econômico" saida="Em Lisboa" info="Com Budget" valor="R$ 148"/></a>

        <a href="/carro2"><Card img={Carro} viagem="Carro Econômico" saida="Em Santiago" info="Com Hertz" valor="R$ 130"/></a>

        <a href="/carro3"><Card img={Carro} viagem="Carro Econômico" saida="Em Belo Horizonte" info="Com Movida" valor="R$ 135"/></a>

        <a href="/carro4"><Card img={Carro} viagem="Carro Econômico" saida="Em Miami" info="Com Florida Premium RentACar" valor="R$ 244"/></a>
        </div>
    )
}

export default Carros