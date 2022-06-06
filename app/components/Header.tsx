import { Container, Logo, Settings, MobileMenu } from "~/components";

export const Header = () => (
  <header className="h-16 dark:bg-gray-900 w-full fixed z-10 top-0 border-b border-gray-100 dark:border-gray-800">
    <nav role="navigation" className="py-3">
      <Container className="px-8">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <Logo />
          </div>
          <div role="group" className="flex items-center justify-end space-x-4">
            <div className="md:hidden">
              <MobileMenu />
            </div>
            <Settings />
          </div>
        </div>
      </Container>
    </nav>
  </header>
);
