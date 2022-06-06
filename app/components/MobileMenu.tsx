import { Button, ModalTrigger, Menu } from "~/components";
import chapters from "~/chapters";

const MenuButton = () => (
  <Button variant="flat" size="small">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  </Button>
);

export const MobileMenu = () => (
  <ModalTrigger title={"Chapters"} trigger={<MenuButton />}>
    <Menu chapters={chapters} />
  </ModalTrigger>
);
