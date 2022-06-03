import type { MetaFunction } from "@remix-run/cloudflare";
import { HeroJumbotron, Text } from "~/components";

export const meta: MetaFunction = () => ({
  title: "Home title",
  description: "Home description",
});

export default function Index() {
  return (
    <HeroJumbotron
      title="Welcome to Skawe.js"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  );
}
