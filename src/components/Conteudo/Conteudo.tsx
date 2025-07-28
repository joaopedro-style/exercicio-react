import Artigo from "./Artigo/Artigo";
import estilos from "./Conteudo.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Conteudo() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const getPageName = (path) => {
    if (path === "/") return "";
    return path.replace(/^\//, "");
  };

  return (
    <section className={`${estilos.arredondada}`}>
      <small style={{ color: getPageName(currentPath) ? "#FFA94D" : "#888", display: "block", marginBottom: "0.5rem" }}>
        {getPageName(currentPath) && getPageName(currentPath)}
      </small>
      <h2>Bem-Vindo(a)ao Back-End !</h2>
      <p>Praticando react.</p>
      <Artigo />
    </section>
  );
}
