import type { ReactNode } from "react";
import { Container, Header, Sidebar } from "~/components";

type LayoutType = {
  children: ReactNode;
};

const CHAPTERS = [
  {
    chapter: 1,
    title: "Tempor incididunt ut labore",
    verses: 46,
  },
  {
    chapter: 2,
    title: "Quis nostrud exercitation ullamco",
    verses: 18,
  },
  {
    chapter: 3,
    title: "Excepteur sint occaecat",
    verses: 16,
  },
  {
    chapter: 4,
    title: "Sunt in culpa qui officia deserunt mollit",
    verses: 16,
  },
];

export const Layout = ({ children }: LayoutType) => (
  <>
    <Header />
    <Container className="px-8" spacing="bottom-large">
      <div className="lg:flex">
        <Sidebar chapters={CHAPTERS} />
        <main
          id="main"
          role="main"
          className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
        >
          {children}
        </main>
      </div>
    </Container>
  </>
);
