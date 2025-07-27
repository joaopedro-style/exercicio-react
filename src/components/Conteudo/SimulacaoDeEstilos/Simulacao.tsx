import { StyledSimulacaoDeEstilos } from "./styles";

export default function SimulacaoDeEstilos() {
  return (
    <StyledSimulacaoDeEstilos>
      <h3>Simulação de Estilos</h3>
      <p>
        Você pode combinar diferentes formas de estilização em um projeto React.
      </p>
      <p className="site-oficial">
        Site Oficial:{" "}
        <a href="https://styled-components.com/" target="_blank">
          Styled Components
        </a>
      </p>
    </StyledSimulacaoDeEstilos>
  );
}
