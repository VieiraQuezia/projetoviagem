import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
// import Hospedagens from "./Pages/NavBar/Hospedagens";
// import Carros from "./Pages/NavBar/Carros";
// import Alugueis from "./Pages/NavBar/Alugueis";
// import Disney from "./Pages/NavBar/Disney";
// import Parques from "./Pages/NavBar/Parques";
// import Italia from "./Pages/Paises/Italia";
// import Japao from "./Pages/Paises/Japao";
// import Mexico from "./Pages/Paises/Mexico";
// import Brasil from "./Pages/Paises/Brasil";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/hospedagens" element={<Hospedagens/>} />
          <Route path="/carros" element={<Carros/>} />
          <Route path="/alugueis" element={<Alugueis />}/>
          <Route path="/disney" element={<Disney/>} />
          <Route path="/parques" element={<Parques/>} />
          <Route path="/italia" element={<Italia/>}/>
          <Route path="/japao" element={<Japao/>}/>
          <Route path="/mexico" element={<Mexico/>}/>
          <Route path="/brasil" element={<Brasil/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
