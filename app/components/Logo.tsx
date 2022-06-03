import { Link } from "@remix-run/react";
import { getSetting } from "~/skawe/modules/settings";

const siteTitle = getSetting("title");

export function Logo() {
  return (
    <Link
      to="/"
      aria-label="Go to home page"
      className="relative text-3xl font-medium font-serif tracking-tighter text-black dark:text-white"
    >
      {siteTitle}
    </Link>
  );
}
