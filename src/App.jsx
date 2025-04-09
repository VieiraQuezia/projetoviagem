import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Hospedagens from "./pages/navBar/paghospedagens";
import Carros from "./pages/navBar/pagcarros";
import Disney from "./pages/navBar/pagdisney";
import Turismo from "./pages/navBar/pagturismo";
import SobreNos from "./pages/navBar/pagsobrenos";
import Italia from "./pages/paises/pagitalia";
import Japao from "./pages/paises/pagjapao";
import Mexico from "./pages/paises/pagmexico";
import Brasil from "./pages/paises/pagbrasil";

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
