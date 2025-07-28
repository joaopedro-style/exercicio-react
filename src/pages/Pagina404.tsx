import { Link } from "react-router-dom";

export default function Pagina404() {
  return (
    <section>
      <h2>Página não Encontrada...</h2>
      <p>
        <Link to="/">Volte para a página inicial</Link>
      </p>
    </section>
  );
}
