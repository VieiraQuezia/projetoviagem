import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Pages/home";


import "./App.css";



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/hospedagens" element='hospedagens' />
          <Route path="/carros" element='carros' />
          <Route path="/" element='alugueis'/>
          <Route path="/Quezia" element='disney' />
          <Route path="/Quezia" element='parques' />
        
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
