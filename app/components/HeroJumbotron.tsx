import type { ReactNode } from "react";
import { Text } from "~/components";

type HeroJumbotronType = {
  title?: any;
  heading?: any;
  description?: any;
  eyebrow?: any;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
};

export function HeroJumbotron({
  title,
  heading,
  description,
  eyebrow,
  leftContent,
  rightContent,
}: HeroJumbotronType) {
  return (
    <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2 sm:grid-cols-1">
      <div className="my-auto">
        <div className="mb-2">
          {eyebrow ? <Text variant="h6">{eyebrow}</Text> : null}
          {title ? <Text variant="h1">{title}</Text> : null}
          {heading ? <Text variant="h2">{heading}</Text> : null}
          {description ? <Text variant="lead">{description}</Text> : null}
          {leftContent}
        </div>
      </div>
      <div className="relative">{rightContent}</div>
    </div>
  );
}
