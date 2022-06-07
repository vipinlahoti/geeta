import { Text } from "~/components";

export const Language = () => (
  <div>
    <Text variant="eyebrow">Language</Text>
    <ul className="spacer-y-2">
      <li className="py-2 px-3 rounded-xl cursor-pointer text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
        English
      </li>
      <li className="py-2 px-3 rounded-xl cursor-pointer text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
        中文
      </li>
      <li className="py-2 px-3 rounded-xl cursor-pointer text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
        Português
      </li>
      <li className="py-2 px-3 rounded-xl cursor-pointer text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
        Help to translate
      </li>
    </ul>
  </div>
);
