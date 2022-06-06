import { Button, ModalTrigger, Logo, Menu } from "~/components";

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

export const MobileMenu = () => (
  <ModalTrigger title={<Logo />} trigger={<MenuButton />}>
    <Menu chapters={CHAPTERS} />
  </ModalTrigger>
);
