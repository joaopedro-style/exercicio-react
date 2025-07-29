import type { CSSProperties } from "react";

const estilosRodape: CSSProperties = {
  color: "darkorange",
  textAlign: "center",
  padding: "1rem",
};

export default function Rodape() {
  return (
    <>
      <footer style={estilosRodape}>
        <h2>Pequeno Projeto React</h2>
        <p style={{ color: "black", fontWeight: "bold" }}>
          Desenvolvido por <b>João Pedro</b> &copy; 2025
        </p>
      </footer>
    </>
  );
}
