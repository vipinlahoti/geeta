import type { ReactNode } from "react";

type ContainerType = {
  spacing?: string;
  column?: number;
  className?: string;
  children: ReactNode;
};

export function Container({
  spacing = "",
  column = 1,
  className = "",
  children,
}: ContainerType) {
  let topSpacing = "";
  let bottomSpacing = "";
  if (spacing) {
    const setSpacing = spacing.split(" ");
    setSpacing.forEach((space) => {
      switch (space) {
        case "top-xlarge":
          topSpacing = "pt-48";
          break;
        case "top-large":
          topSpacing = "pt-32";
          break;
        case "top-medium":
          topSpacing = "pt-16";
          break;
        case "top-small":
          topSpacing = "pt-8";
          break;
        case "bottom-xlarge":
          bottomSpacing = "pb-48";
          break;
        case "bottom-large":
          bottomSpacing = "pb-32";
          break;
        case "bottom-medium":
          bottomSpacing = "pb-16";
          break;
        case "bottom-small":
          bottomSpacing = "pb-8";
          break;
        default:
          topSpacing = "";
          bottomSpacing = "";
      }
    });
  }

  return (
    <div
      className={`container mx-auto grid grid-cols-1 gap-x-8 ${className} ${topSpacing} ${bottomSpacing} ${
        column === 2 ? "lg:grid-cols-2 sm:grid-cols-1" : ""
      } ${column === 3 ? "lg:grid-cols-3 sm:grid-cols-1" : ""} ${
        column === 4 ? "lg:grid-cols-4 sm:grid-cols-1" : ""
      }`}
    >
      {children}
    </div>
  );
}
