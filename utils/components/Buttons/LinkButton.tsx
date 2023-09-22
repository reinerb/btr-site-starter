import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  outline: boolean;
  small: boolean;
  invertedDarkModeHover: boolean;
};

function Button({
  outline,
  small,
  invertedDarkModeHover,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link className={twMerge(className)} {...props}>
      {children}
    </Link>
  );
}

export default Button;
