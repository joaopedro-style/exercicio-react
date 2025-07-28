import { Link, useLocation } from "react-router-dom";
import estilos from "./Menu.module.css";

export default function Menu() {
  const location = useLocation();
  return (
    <nav className={estilos.menu}>
      <Link to="/" className={location.pathname === "/" ? estilos.active : ""}>Home</Link>
      <Link to="/BackEnd" className={location.pathname === "/BackEnd" ? estilos.active : ""}>Back End</Link>
      <Link to="/PHP" className={location.pathname === "/PHP" ? estilos.active : ""}>PHP</Link>
      <Link to="/Mysql" className={location.pathname === "/Mysql" ? estilos.active : ""}>MYSQL</Link>
    </nav>
  );
}
