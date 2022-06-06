import type { ReactNode } from "react";

type TextType = {
  variant?: string;
  className?: string;
  children: ReactNode;
  noGutter?: boolean;
};

export const Text = ({
  variant,
  children,
  className = "",
  noGutter = false,
}: TextType) => {
  const fontStyle = "text-black dark:text-white";

  if (variant === "h1") {
    return (
      <h1
        className={`text-8xl tracking-normal font-medium ${fontStyle} ${
          noGutter ? "" : "mb-10"
        } ${className}`}
      >
        {children}
      </h1>
    );
  } else if (variant === "h2") {
    return (
      <h2
        className={`text-6xl tracking-tight font-semibold ${fontStyle} ${
          noGutter ? "" : "mb-8"
        } ${className}`}
      >
        {children}
      </h2>
    );
  } else if (variant === "h3") {
    return (
      <h3
        className={`text-5xl tracking-tight font-semibold ${fontStyle} ${
          noGutter ? "" : "mb-6"
        } ${className}`}
      >
        {children}
      </h3>
    );
  } else if (variant === "h4") {
    return (
      <h4
        className={`text-4xl tracking-tight font-semibold ${fontStyle} ${
          noGutter ? "" : "mb-4"
        } ${className}`}
      >
        {children}
      </h4>
    );
  } else if (variant === "h5") {
    return (
      <h5
        className={`text-3xl tracking-tight font-semibold ${fontStyle} ${
          noGutter ? "" : "mb-4"
        } ${className}`}
      >
        {children}
      </h5>
    );
  } else if (variant === "h6") {
    return (
      <h6
        className={`text-xl tracking-tight font-bold ${fontStyle} ${
          noGutter ? "" : "mb-4"
        } ${className}`}
      >
        {children}
      </h6>
    );
  } else if (variant === "lead") {
    return (
      <p
        className={`text-xl font-light ${fontStyle} ${
          noGutter ? "" : "mb-8"
        } ${className}`}
      >
        {children}
      </p>
    );
  } else {
    return (
      <p
        className={`text-base font-normal leading-normal text-gray-700 dark:text-gray-200 ${
          noGutter ? "" : "mb-2"
        }`}
      >
        {children}
      </p>
    );
  }
};
