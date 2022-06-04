import { Link } from "@remix-run/react";
import { getSetting } from "~/skawe/modules/settings";

const siteTitle = getSetting("title");

export function Logo() {
  return (
    <Link
      to="/"
      aria-label="Go to home page"
      className="text-xl font-medium font-serif tracking-wide text-black dark:text-white"
    >
      {siteTitle}
    </Link>
  );
}
