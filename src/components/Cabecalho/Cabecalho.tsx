import Menu from "./Menu/Menu";
import estilos from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={estilos.topoSite}>
      <h1 className={estilos.titulo}>Exercício React 🤔</h1>
      <hr />
      <Menu />
    </header>
  );
}
