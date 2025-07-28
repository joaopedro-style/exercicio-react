import { Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Container from "./components/Container/Container";
import Rodape from "./components/Rodape/Rodape";
import Home from "./pages/Home";
import PHP from "./pages/PHP";
import BackEnd from "./pages/BackEnd";
import Mysql from "./pages/Mysql";
import Pagina404 from "./pages/Pagina404";

export default function App() {
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
