import type { CSSProperties } from "react";

const estilosRodape: CSSProperties = {
  backgroundClip: "#333",
  color: "white",
  textAlign: "center",
  padding: "1rem",
};

export default function Rodape() {
  return (
    <>
      <footer style={estilosRodape}>
        <h2>Pequeno Projeto React</h2>
        <p style={{ color: "orange", fontWeight: "bold" }}>
          Desenvolvido por <b>João Pedro</b> &copy; 2025
        </p>
      </footer>
      <hr />
      <p className="outro-texto">Praticando...</p>
      <hr />
    </>
  );
}
