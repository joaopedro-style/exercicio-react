import type { ReactNode } from "react";
import estilos from "./Container.module.css";
import Menu from "../../Menu/Menu";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <main className={estilos.container}>
      <Menu />
      {children}
    </main>
  );
}
