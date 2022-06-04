import type { ReactNode } from "react";
import { Container, Header } from "~/components";

type LayoutType = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutType) => (
  <>
    <Header />
    <main id="main" role="main">
      <Container spacing="top-large bottom-large">{children}</Container>
    </main>
  </>
);
