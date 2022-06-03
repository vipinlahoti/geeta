import type { ReactNode } from "react";
import { Container } from "~/components";

type LayoutType = {
  children: ReactNode;
};

export function Layout({ children }: LayoutType) {
  return (
    <main id="main" role="main">
      <Container spacing="top-medium bottom-medium">{children}</Container>
    </main>
  );
}
