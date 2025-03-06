import { Link } from "react-router-dom";
import '../components/NavBar.css'
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        
    
        <li>
                <Link className="link" to='/Guilherme' > Hospedagens </Link>
                </li>
            <li>
                <Link className="link" to='/Leo' > Carros </Link>
                </li>
            <li>
                <Link className="link" to='/Hayeska' > Alugueis </Link>
                </li>
            <li>
                <Link className="link" to='/Quezia' > Disney </Link>
                </li>
            <li>
                <Link className="link" to='/Quezia' > Parques </Link>
                </li>
      </ul>
    </nav>
  );
}

export default NavBar;
