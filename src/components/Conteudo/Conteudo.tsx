import Artigo from "./Artigo/Artigo";
import estilos from "./Conteudo.module.css";

export default function Conteudo() {
  return (
    <section className={`${estilos.arredondada}`}>
      <h2>Bem-Vindo(a)ao Back-End !</h2>
      <p>Praticando react.</p>

      <Artigo />
    </section>
  );
}
