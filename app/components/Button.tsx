import { Link, NavLink } from "@remix-run/react";
import type { ReactNode } from "react";

type ButtonVariant = "link" | "flat" | "outline" | "";
type ButtonSize = "small" | "";

interface ButtonLinkInterface {
  path?: any;
  children: ReactNode;
}

interface ButtonLinkSizeInterface {
  path?: any;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

interface ButtonInterface {
  path?: any;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  // All other props
  [x: string]: any;
}

// const activeClassName =
//   "relative after:bg-amber-400 after:h-1 after:absolute after:w-2/4 after:left-0 after:-bottom-1";
const defaultClass =
  "whitespace-nowrap inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 ring-gray-500 dark:ring-gray-100 ring-offset-white dark:ring-offset-black ring-offset-2 transition duration-200 ease-in-out capitalize";
const linkButtonClass =
  "relative text-black dark:text-gray-300 dark:hover:text-white hover:after:bg-amber-400 hover:after:h-1 hover:after:absolute hover:after:w-2/4 hover:after:left-0 hover:after:-bottom-1";
const outlineButtonClass =
  "border-2 text-gray-700 hover:bg-black/[.08] dark:text-gray-400 dark:hover:text-white border-gray-700 hover:border-black dark:hover:border-white";
const solidButtonClass =
  "border-2 drop-shadow-xl bg-black text-white hover:text-black hover:bg-black/[.08] border-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white dark:hover:border-white dark:border-white";

const flatButtonClass = () =>
  "px-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900";

const sizeClass = (size: string) => {
  return size === "small"
    ? "rounded-xl leading-10 h-10"
    : "rounded-2xl leading-10 h-14 py-1.5";
};

/**
 * @summary Flat button
 * @param path
 * @param size
 */
const FlatButton = ({
  path,
  size = "",
  children,
  ...rest
}: ButtonLinkSizeInterface) => {
  const className = `${defaultClass} ${sizeClass(size)} ${flatButtonClass()}`;

  if (path) {
    return (
      <Link to={path} className={className} {...rest}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    );
  }
};

/**
 * @summary Outline button
 * @param path
 * @param size
 */
function OutlineButton({
  path,
  size = "",
  children,
  ...rest
}: ButtonLinkSizeInterface) {
  const className = `${defaultClass} ${sizeClass(size)} ${outlineButtonClass}`;

  if (path) {
    return (
      <Link to={path} className={className} {...rest}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    );
  }
}

/**
 * @summary Solid button
 * @param path
 * @param size
 */
function SolidButton({
  path,
  size = "",
  className = "",
  children,
  ...rest
}: ButtonLinkSizeInterface) {
  const defaultClassName = `${defaultClass} ${className} ${sizeClass(
    size
  )} ${solidButtonClass}`;

  if (path) {
    return (
      <Link to={path} className={defaultClassName} {...rest}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={defaultClassName} {...rest}>
        {children}
      </button>
    );
  }
}

function ButtonLinkActive({ path, children, ...rest }: ButtonLinkInterface) {
  const className = `${defaultClass} ${linkButtonClass}`;
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? `${className}` : className)}
      {...rest}
    >
      {children}
    </NavLink>
  );
}

export function Button({
  href,
  children,
  size = "",
  variant = "",
  leftIcon,
  rightIcon,
  ...rest
}: ButtonInterface) {
  return (
    <>
      {variant === "link" ? (
        <ButtonLinkActive path={href} {...rest}>
          {children}
        </ButtonLinkActive>
      ) : variant === "flat" ? (
        <FlatButton path={href} size={size} {...rest}>
          {children}
        </FlatButton>
      ) : variant === "outline" ? (
        <OutlineButton path={href} size={size} {...rest}>
          {children}
        </OutlineButton>
      ) : (
        <SolidButton path={href} size={size} {...rest}>
          {children}
        </SolidButton>
      )}
    </>
  );
}
