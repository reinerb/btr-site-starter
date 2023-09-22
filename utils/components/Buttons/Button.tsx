import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  outline: boolean;
  small: boolean;
  invertedDarkModeHover: boolean;
};

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
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
}: ButtonProps) {
  return (
    <button className={twMerge(className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
