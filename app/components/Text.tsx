import type { ReactNode } from "react";

type TextType = {
  variant?: string;
  children: ReactNode;
};

export function Text({ variant, children }: TextType) {
  const fontStyle = "text-black dark:text-white";

  if (variant === "h1") {
    return (
      <h1
        className={`text-8xl tracking-normal font-semibold mb-10 ${fontStyle}`}
      >
        {children}
      </h1>
    );
  } else if (variant === "h2") {
    return (
      <h2 className={`text-6xl tracking-tight font-semibold mb-8 ${fontStyle}`}>
        {children}
      </h2>
    );
  } else if (variant === "h3") {
    return (
      <h3 className={`text-5xl tracking-tight font-semibold mb-6 ${fontStyle}`}>
        {children}
      </h3>
    );
  } else if (variant === "h4") {
    return (
      <h4 className={`text-4xl tracking-tight font-semibold mb-4 ${fontStyle}`}>
        {children}
      </h4>
    );
  } else if (variant === "h5") {
    return (
      <h5 className={`text-3xl tracking-tight font-semibold mb-4 ${fontStyle}`}>
        {children}
      </h5>
    );
  } else if (variant === "h6") {
    return (
      <h6 className={`text-xl tracking-tight font-bold mb-4 ${fontStyle}`}>
        {children}
      </h6>
    );
  } else if (variant === "lead") {
    return (
      <p className="text-xl font-medium mb-4 text-gray-700 dark:text-gray-300">
        {children}
      </p>
    );
  } else {
    return (
      <p className="text-base font-normal leading-normal mb-4 text-gray-700 dark:text-gray-200">
        {children}
      </p>
    );
  }
}
