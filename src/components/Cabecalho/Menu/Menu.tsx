import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.menu}>
      <a href="">Home</a>
      <a href="">Back End</a>
      <a href="">PHP</a>
      <a href="">MYSQL</a>
    </nav>
  );
}
