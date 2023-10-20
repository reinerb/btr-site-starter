import Link, { LinkProps } from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    outline?: boolean;
    small?: boolean;
    invertedDarkModeHover?: boolean;
  };

function LinkButton({
  outline,
  small,
  invertedDarkModeHover,
  className,
  children,
  ...props
}: LinkButtonProps) {
  const sizeProps = small ? "px-2 py-1 text-sm" : "px-4 py-2 text-base";

  let colorProps: string;

  if (outline && invertedDarkModeHover) {
    colorProps = `border border-primary-300 hover:border-primary-200 active:border-primary-100
    text-primary-300 hover:text-primary-200 active:text-primary-100
    dark:border-primary-700 dark:hover:border-primary-800 dark:active:border-primary-900
    dark:text-primary-700 dark:hover:text-primary-800 dark:active:text-primary-900`;
  } else if (outline) {
    colorProps = `border border-primary-700 hover:border-primary-800 active:border-primary-900
    text-primary-700 hover:text-primary-800 active:text-primary-900
    dark:border-primary-300 dark:hover:border-primary-200 dark:active:border-primary-100
    dark:text-primary-300 dark:hover:text-primary-200 dark:active:text-primary-100`;
  } else if (invertedDarkModeHover) {
    colorProps = `bg-primary-300 hover:bg-primary-200 active_bg-primary-100 
    dark:bg-primary-700 dark:hover:bg-primary-800 dark:active:bg-primary-900
    text-neutral-950 dark:text-neutral-50`;
  } else {
    colorProps = `bg-primary-700 hover:bg-primary-800 active_bg-primary-900 
    dark:bg-primary-300 dark:hover:bg-primary-200 dark:active:bg-primary-100
    text-neutral-50 dark:text-neutral-950`;
  }

  return (
    <Link
      className={twMerge(
        "block h-fit w-fit transition-colors duration-200",
        sizeProps,
        colorProps,
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
