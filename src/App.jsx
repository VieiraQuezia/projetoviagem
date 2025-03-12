import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Hospedagens from "./Pages/NavBar/Hospedagens";
import Carros from "./Pages/NavBar/Carros";
import Disney from "./Pages/NavBar/Disney";
import Turismo from "./Pages/NavBar/Turismo";
import SobreNos from "./Pages/NavBar/SobreNos";
import Italia from "./Pages/Paises/Italia";
import Japao from "./Pages/Paises/Japao";
import Mexico from "./Pages/Paises/Mexico";
import Brasil from "./Pages/Paises/Brasil";

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
