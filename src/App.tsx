import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Container from "./components/Container/Container";
import Rodape from "./components/Rodape/Rodape";
import Home from "./pages/Home";
import PHP from "./pages/PHP";
import BackEnd from "./pages/BackEnd";
import Mysql from "./pages/Mysql";
import Pagina404 from "./pages/Pagina404";

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/BackEnd": "Back End",
  "/PHP": "PHP",
  "/Mysql": "MYSQL",
};

export default function App() {
  const location = useLocation();
  useEffect(() => {
    const title = pageTitles[location.pathname] || "Meu Site de Rock";
    document.title = title;
  }, [location]);

  return (
    <>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BackEnd" element={<BackEnd />} />
          <Route path="/PHP" element={<PHP />} />
          <Route path="/Mysql" element={<Mysql />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </Container>
      <Rodape />
    </>
  );
}
