import type { ReactNode } from "react";
import { Container, Header, Menu } from "~/components";

type LayoutType = {
  children: ReactNode;
};

const CHAPTERS = [
  {
    chapter: 1,
    title: "Viśāda yoga",
    verses: 46,
  },
  {
    chapter: 2,
    title: "Sāńkhya yoga",
    verses: 18,
  },
  {
    chapter: 3,
    title: "Karma yoga",
    verses: 16,
  },
  {
    chapter: 4,
    title: "Jñāna yoga",
    verses: 16,
  },
];

export const Layout = ({ children }: LayoutType) => (
  <>
    <Header />
    <Container className="px-8" spacing="top-medium bottom-large">
      <div className="md:flex">
        <aside
          id="sidebar"
          className="flex-none lg:w-80 w-60 h-full lg:overflow-y-visible md:block hidden py-10 pr-8 mr-8 border-r border-gray-100 dark:border-gray-800"
        >
          <Menu chapters={CHAPTERS} className="fixed pr-8 lg:w-80 w-60" />
        </aside>
        <main
          id="main"
          role="main"
          className="flex-auto w-full min-w-0 md:static md:max-h-full md:overflow-visible"
        >
          {children}
        </main>
      </div>
    </Container>
  </>
);
