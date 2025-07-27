import estilos from "./Artigo.module.css";
export default function Artigo() {
  return (
    <article className={estilos.artigo}>
      <h3>Fundamentos do Back-End</h3>
      <p>
        É a parte do desenvolvimento web responsável pelo funcionamento interno
        da aplicação: regras de negócio, lógica de dados, autenticação,
        comunicação com o banco de dados e servidores.
      </p>
    </article>
  );
}
