import { Button } from "~/components";

type Chapters = {
  chapter: number;
  title: string;
  verses: number;
};

type MenuType = {
  chapters: Chapters[];
  className?: string;
};

export const Menu = ({ chapters, className }: MenuType) => (
  <ul className={`z-10 overflow-y-scroll h-full ${className}`}>
    <li className="uppercase text-xs font-bold mb-2 text-gray-500 dark:text-gray-400 hidden md:block">
      Chapters
    </li>
    {chapters.map(
      (phrase: { chapter: number; title: string; verses: number }) => (
        <li
          key={phrase.chapter}
          className="-ml-4 mb-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
        >
          <Button
            variant="link"
            href="/chapters/chapter"
            className="flex flex-col px-4 py-2"
          >
            <span className="font-serif font-semibold text-black dark:text-white">
              {phrase.title}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {phrase.verses} Verses
            </span>
          </Button>
        </li>
      )
    )}
  </ul>
);
