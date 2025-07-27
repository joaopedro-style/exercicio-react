import styled from "styled-components";

let tema: boolean = false;

export const StyledSimulacaoDeEstilos = styled.section`
  background-color: ${tema ? "orange" : "white"};
  border-left: 5px solid darkorange;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;

  h3 {
    margin-top: 0;
    color: cadetblue;
  }

  p {
    color: darkgoldenrod;
    font-size: 1.1rem;
  }

  .site-oficial {
    background-color: orange;
    color: white;
    font-weight: bold;

    a {
      text-decoration: none;
      color: darkorange;
      font-weight: bold;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;
