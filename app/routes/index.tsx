import type { MetaFunction } from "@remix-run/cloudflare";
import { HeroJumbotron, Text } from "~/components";

export const meta: MetaFunction = () => ({
  title: "Home title",
  description: "Home description",
});

export default function Index() {
  return (
    <HeroJumbotron
      title="Coming soon"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      content={
        <Text>
          Dolor morbi non arcu risus quis varius. Tellus at urna condimentum
          mattis pellentesque id nibh tortor. Morbi tincidunt augue interdum
          velit euismod. Suspendisse sed nisi lacus sed
        </Text>
      }
    />
  );
}
