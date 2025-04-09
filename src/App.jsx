import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home";
import Hospedagens from "./paginas/navBar/paghospedagens";
import Carros from "./paginas/navBar/pagcarros";
import Disney from "./paginas/navBar/pagdisney";
import Turismo from "./paginas/navBar/pagturismo";
import SobreNos from "./paginas/navBar/pagsobrenos";
import Italia from "./paginas/paises/pagitalia";
import Japao from "./paginas/paises/pagjapao";
import Mexico from "./paginas/paises/pagmexico";
import Brasil from "./paginas/paises/pagbrasil";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hospedagens" element={<Hospedagens />} />
          <Route path="/Carros" element={<Carros />} />
          <Route path="/Turismo" element={<Turismo />} />
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/Disney" element={<Disney />} />

          <Route path="/italia" element={<Italia />} />
          <Route path="/japao" element={<Japao />} />
          <Route path="/mexico" element={<Mexico />} />
          <Route path="/brasil" element={<Brasil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
