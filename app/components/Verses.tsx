import { Text } from "~/components";

type VersesType = {
  chapter: number;
  description: string;
  verse: number;
};

export const Verses = ({ chapter, description, verse }: VersesType) => (
  <div className="border-b border-gray-100 dark:border-gray-800 py-10">
    <div className="flex">
      <div className="w-20">
        <Text>
          {chapter}:{verse}
        </Text>
      </div>
      <div className="w-11/12">
        <Text variant="lead">{description}</Text>
      </div>
    </div>
  </div>
);
