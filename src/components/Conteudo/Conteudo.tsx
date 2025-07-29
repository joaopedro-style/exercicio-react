import Artigo from "./Artigo/Artigo";
import estilos from "./Conteudo.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Conteudo() {
  const location = useLocation();

  useEffect(() => {
    const nomePagina = obterNomePagina(location.pathname);
    document.title = nomePagina || "Projeto React | Meu App";
  }, [location]);

  const obterNomePagina = (caminho: string) => {
    if (caminho === "/") return "Home";
    return caminho
      .replace(/^\//, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <section className={`${estilos.arredondada}`}>
      <h2>Seja bem-vindo(a) ao mundo do Back-End!</h2>
      <p>
        Vamos explorar juntos os fundamentos que tornam as aplicações dinâmicas,
        inteligentes e conectadas ao banco de dados.
      </p>
      <Artigo />
    </section>
  );
}
