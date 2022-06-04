import { Container, Logo } from "~/components";

export const Header = () => (
  <header className="bg-gray-100 dark:bg-gray-800">
    <nav role="navigation" className="py-5 backdrop-blur-sm">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <div
            role="group"
            className="flex items-center justify-end space-x-4"
          ></div>
        </div>
      </Container>
    </nav>
  </header>
);
