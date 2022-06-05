import { Button } from "~/components";

type Chapters = {
  chapter: number;
  title: string;
  verses: number;
};

type SidebarType = {
  chapters: Chapters[];
};

export const Sidebar = ({ chapters }: SidebarType) => (
  <aside
    id="sidebar"
    className="flex-none w-80 h-full lg:overflow-y-visible lg:block hidden py-10 pr-8 mr-8"
  >
    <ul className="relative z-10">
      <li className="uppercase text-xs font-bold mb-2 text-gray-500 dark:text-gray-400">
        Chapters
      </li>
      {chapters.map(
        (phrase: { chapter: number; title: string; verses: number }) => (
          <li
            key={phrase.chapter}
            className="-ml-4 px-4 py-2 mb-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            <Button
              variant="link"
              href="/chapters/chapter"
              className="flex flex-col"
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
  </aside>
);
