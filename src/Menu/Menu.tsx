import { Link } from "react-router-dom";
import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.menu}>
      <Link to="/">Home</Link>
      <Link to="/BackEnd">Back End</Link>
      <Link to="/PHP">PHP</Link>
      <Link to="/Mysql">MYSQL</Link>
    </nav>
  );
}
