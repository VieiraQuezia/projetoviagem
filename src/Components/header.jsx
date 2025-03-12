import Logo from "/logo.png";

import "./header.css";

function App() {
  return (
    <>
      <header>
        <h1>VIAGENS ✈</h1>
        <a href="http://localhost:5174/" target="_self" >
        <img className="logo" src={Logo} />
        </a>
      </header>
    </>
  );
}

export default App;
