import type { ReactNode } from "react";
import { Container, Text } from "~/components";

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
    <Container spacing="top-large bottom-large" column={2}>
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
    </Container>
  );
}
