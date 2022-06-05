import type { ReactNode } from "react";
import { Container, Text } from "~/components";

type HeroJumbotronType = {
  title?: any;
  heading?: any;
  description?: any;
  eyebrow?: any;
  content?: ReactNode;
};

export function HeroJumbotron({
  title,
  heading,
  description,
  eyebrow,
  content,
}: HeroJumbotronType) {
  return (
    <Container spacing="top-small bottom-medium">
      <div className="mb-2">
        {eyebrow ? <Text variant="h6">{eyebrow}</Text> : null}
        {title ? <Text variant="h1">{title}</Text> : null}
        {heading ? <Text variant="h2">{heading}</Text> : null}
        {description ? <Text variant="lead">{description}</Text> : null}
        {content}
      </div>
    </Container>
  );
}
