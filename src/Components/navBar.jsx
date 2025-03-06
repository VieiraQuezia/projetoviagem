import { Link } from "react-router-dom";
import '../components/NavBar.css'
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        
    
        <li>
                <Link className="link" to='/Hospedagens' > Hospedagens </Link>
                </li>
            <li>
                <Link className="link" to='/Carros' > Carros </Link>
                </li>
            <li>
                <Link className="link" to='/Alugueis' > Alugueis </Link>
                </li>
            <li>
                <Link className="link" to='/Disney' > Disney </Link>
                </li>
            <li>
                <Link className="link" to='/Parques' > Parques </Link>
                </li>
      </ul>
    </nav>
  );
}

export default NavBar;
